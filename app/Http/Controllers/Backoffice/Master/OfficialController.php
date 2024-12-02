<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\OfficialRequest;
use App\Models\Official;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OfficialController extends Controller
{

    public function index(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('per_page', 10);

        $officials = Official::query()->paginate(perPage: $perPage, page: $page);

        $response = [
            "prev_page" => $officials->currentPage() > 1 ? $officials->currentPage() - 1 : null,
            "items" => $officials->items(),
            "next_page" => $officials->hasMorePages() ? $officials->currentPage() + 1 : null,
        ];

        return Inertia::render('backoffice/master/official/index', [
            'response' => $response,
        ]);
    }

    public function create()
    {
        return Inertia::render('backoffice/master/official/form');
    }

    public function store(OfficialRequest $request)
    {
        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Official::query()->create($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.officials.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function update($id, OfficialRequest $request)
    {

        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Official::query()->where('id', $id)->update($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.officials.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            Official::query()->where('id', $id)->delete();
            DB::commit();

            return Inertia::location(route('backoffice.master.officials.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }
}

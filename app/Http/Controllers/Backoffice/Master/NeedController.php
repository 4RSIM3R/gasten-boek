<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\NeedRequest;
use App\Models\Need;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class NeedController extends Controller
{

    public function index(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('per_page', 10);

        $needs = Need::query()->paginate(perPage: $perPage, page: $page);

        $response = [
            "prev_page" => $needs->currentPage() > 1 ? $needs->currentPage() - 1 : null,
            "items" => $needs->items(),
            "next_page" => $needs->hasMorePages() ? $needs->currentPage() + 1 : null,
        ];

        return Inertia::render('backoffice/master/need/index', [
            'response' => $response,
        ]);
    }

    public function create()
    {
        return Inertia::render('backoffice/master/need/form');
    }

    public function store(NeedRequest $request)
    {
        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Need::query()->create($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.needs.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function update($id, NeedRequest $request)
    {
        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Need::query()->where('id', $id)->update($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.needs.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            Need::query()->where('id', $id)->delete();
            DB::commit();

            return Inertia::location(route('backoffice.master.needs.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }
}

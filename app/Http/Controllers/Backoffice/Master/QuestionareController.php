<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionareRequest;
use App\Models\Questionare;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class QuestionareController extends Controller
{

    public function index(Request $request)
    {
        $page = $request->get('page', 1);
        $perPage = $request->get('per_page', 10);

        $questions = Questionare::query()->paginate(perPage: $perPage, page: $page);

        $response = [
            "prev_page" => $questions->currentPage() > 1 ? $questions->currentPage() - 1 : null,
            "items" => $questions->items(),
            "next_page" => $questions->hasMorePages() ? $questions->currentPage() + 1 : null,
        ];

        return Inertia::render('backoffice/master/questionare/index', [
            'response' => $response,
        ]);
    }

    public function create()
    {
        return Inertia::render('backoffice/master/questionare/form');
    }

    public function store(QuestionareRequest $request)
    {
        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Questionare::query()->create($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.questionares.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function update($id, QuestionareRequest $request)
    {
        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Questionare::query()->where('id', $id)->update($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.questionares.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            Questionare::query()->where('id', $id)->delete();
            DB::commit();

            return Inertia::location(route('backoffice.master.questionares.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }
}

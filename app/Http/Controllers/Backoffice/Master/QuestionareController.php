<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\QuestionareRequest;
use App\Models\Questionare;
use Illuminate\Http\Request;
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

    public function store(QuestionareRequest $request) {}

    public function update($id, QuestionareRequest $request) {}

    public function destroy($id) {}
}

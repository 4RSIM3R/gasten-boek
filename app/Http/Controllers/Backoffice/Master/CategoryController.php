<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{

    public function index(Request $request)
    {

        $page = $request->get('page', 1);
        $perPage = $request->get('per_page', 10);

        $categories = Category::query()->paginate(perPage: $perPage, page: $page);

        $response = [
            "prev_page" => $categories->currentPage() > 1 ? $categories->currentPage() - 1 : null,
            "items" => $categories->items(),
            "next_page" => $categories->hasMorePages() ? $categories->currentPage() + 1 : null,
        ];

        return Inertia::render('backoffice/question/index', [
            'response' => $response,
        ]);
    }

    public function create()
    {
        return Inertia::render('backoffice/question/form');
    }

    public function store(CategoryRequest $request)
    {

        $payload = $request->validated();
    }

    public function update($id, CategoryRequest $request) {}

    public function destroy($id) {}
}

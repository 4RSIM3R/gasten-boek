<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

        return Inertia::render('backoffice/master/category/index', [
            'response' => $response,
        ]);
    }

    public function create()
    {
        return Inertia::render('backoffice/master/category/form');
    }

    public function store(CategoryRequest $request)
    {
        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Category::query()->create($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.categories.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function update($id, CategoryRequest $request)
    {

        $payload = $request->validated();

        try {
            DB::beginTransaction();
            Category::query()->where('id', $id)->update($payload);
            DB::commit();

            return Inertia::location(route('backoffice.master.categories.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            Category::query()->where('id', $id)->delete();
            DB::commit();

            return Inertia::location(route('backoffice.master.categories.index'));
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('errors', $e->getMessage());
        }
    }
}

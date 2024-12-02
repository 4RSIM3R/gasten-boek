<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\NeedRequest;
use App\Models\Need;
use Illuminate\Http\Request;
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
    }

    public function update($id, NeedRequest $request) {}

    public function destroy($id) {}
}

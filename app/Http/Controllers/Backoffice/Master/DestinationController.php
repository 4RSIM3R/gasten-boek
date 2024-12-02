<?php

namespace App\Http\Controllers\Backoffice\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\DestinationRequest;
use App\Models\Destination;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinationController extends Controller
{

    public function index(Request $request)
    {

        $page = $request->get('page', 1);
        $perPage = $request->get('per_page', 10);

        $destinations = Destination::query()->paginate(perPage: $perPage, page: $page);

        $response = [
            "prev_page" => $destinations->currentPage() > 1 ? $destinations->currentPage() - 1 : null,
            "items" => $destinations->items(),
            "next_page" => $destinations->hasMorePages() ? $destinations->currentPage() + 1 : null,
        ];

        return Inertia::render('backoffice/master/destination/index', [
            'response' => $response,
        ]);
    }

    public function create()
    {
        return Inertia::render('backoffice/master/destination/form');
    }

    public function store(DestinationRequest $request)
    {
        $payload = $request->validated();
    }

    public function update($id, DestinationRequest $request) {}

    public function destroy($id) {}
}

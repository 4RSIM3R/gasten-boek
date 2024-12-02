<?php

namespace App\Http\Controllers\Backoffice\Operational;

use App\Http\Controllers\Controller;
use App\Models\Guest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestController extends Controller
{

    public function index(Request $request)
    {

        $page = $request->get('page', 1);
        $perPage = $request->get('per_page', 10);

        $guests = Guest::query()->paginate(perPage: $perPage, page: $page);

        $response = [
            "prev_page" => $guests->currentPage() > 1 ? $guests->currentPage() - 1 : null,
            "items" => $guests->items(),
            "next_page" => $guests->hasMorePages() ? $guests->currentPage() + 1 : null,
        ];

        return Inertia::render('backoffice/operational/guest/index', [
            'response' => $response,
        ]);
    }

    public function show($id)
    {

        $guest = Guest::query()->where('id', $id)->first();

        return Inertia::render('backoffice/operational/guest/show', [
            'guest' => $guest,
        ]);
    }
}

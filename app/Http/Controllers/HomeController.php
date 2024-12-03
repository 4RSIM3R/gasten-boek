<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Destination;
use App\Models\Need;
use App\Models\Official;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index()
    {
        $category = Category::query()->get(['id', 'name']);
        $official = Official::query()->get(['id', 'name']);
        $need = Need::query()->get(['id', 'name']);
        $destination = Destination::query()->get(['id', 'name']);

        return Inertia::render('home', [
            'category' => $category,
            'official' => $official,
            'need' => $need,
            'destination' => $destination,
        ]);
    }

    public function questionare($id)
    {
        return Inertia::render('questionare');
    }

    public function answer($id) {}
}

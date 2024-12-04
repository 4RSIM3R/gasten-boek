<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecordGuestRequest;
use App\Models\Category;
use App\Models\Destination;
use App\Models\Guest;
use App\Models\Need;
use App\Models\Official;
use App\Models\Questionare;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

    public function record_guest(RecordGuestRequest $request)
    {
        $payload = $request->validated();

        try {
            DB::beginTransaction();
            $guest = Guest::query()->create($payload);
            DB::commit();
            return redirect()->route('questionare', ['id' => $guest->id]);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors('errors', $e->getMessage());
        }
    }

    public function questionare($id)
    {
        $questions = Questionare::query()->get(['id', 'question']);
        $guest = Guest::query()->where('id', $id)->first();

        return Inertia::render('questionare', [
            "questions" => $questions,
            "guest" => $guest,
        ]);
    }

    public function answer($id) {}
}

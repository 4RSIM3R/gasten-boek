<?php

use App\Http\Controllers;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('', [HomeController::class, 'index'])->name('home');
Route::post('record_guest', [HomeController::class, 'record_guest'])->name('record_guest');
Route::get('questionare/{id}', [HomeController::class, 'questionare'])->name('questionare');

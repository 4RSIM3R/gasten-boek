<?php

use App\Http\Controllers\Backoffice\Master\CategoryController;
use App\Http\Controllers\Backoffice\Master\DestinationController;
use App\Http\Controllers\Backoffice\Master\NeedController;
use App\Http\Controllers\Backoffice\Master\OfficialController;
use App\Http\Controllers\Backoffice\Master\QuestionareController;
use App\Http\Controllers\Backoffice\Operational\AnalyticController;
use App\Http\Controllers\Backoffice\Operational\GuestController;
use App\Http\Controllers\BackofficeController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'backoffice', 'as' => 'backoffice.'], function () {

    Route::get('', [BackofficeController::class, 'index'])->name('index');

    Route::group(['prefix' => 'master', 'as' => 'master.'], function () {

        Route::group(['prefix' => 'categories', 'as' => 'categories.'], function () {
            Route::get('', [CategoryController::class, 'index'])->name('index');
            Route::get('create', [CategoryController::class, 'create'])->name('create');
            Route::post('', [CategoryController::class, 'store'])->name('store');
            Route::get('{id}/show', [CategoryController::class, 'edit'])->name('show');
            Route::put('{id}/update', [CategoryController::class, 'update'])->name('update');
            Route::delete('{id}/delete', [CategoryController::class, 'destroy'])->name('destroy');
        });

        Route::group(['prefix' => 'destinations', 'as' => 'destinations.'], function () {
            Route::get('', [DestinationController::class, 'index'])->name('index');
            Route::get('create', [DestinationController::class, 'create'])->name('create');
            Route::post('', [DestinationController::class, 'store'])->name('store');
            Route::get('{id}/show', [DestinationController::class, 'edit'])->name('show');
            Route::put('{id}/update', [DestinationController::class, 'update'])->name('update');
            Route::delete('{id}/delete', [DestinationController::class, 'destroy'])->name('destroy');
        });

        Route::group(['prefix' => 'needs', 'as' => 'needs.'], function () {
            Route::get('', [NeedController::class, 'index'])->name('index');
            Route::get('create', [NeedController::class, 'create'])->name('create');
            Route::post('', [NeedController::class, 'store'])->name('store');
            Route::get('{id}/show', [NeedController::class, 'edit'])->name('show');
            Route::put('{id}/update', [NeedController::class, 'update'])->name('update');
            Route::delete('{id}/delete', [NeedController::class, 'destroy'])->name('destroy');
        });

        Route::group(['prefix' => 'officials', 'as' => 'officials.'], function () {
            Route::get('', [OfficialController::class, 'index'])->name('index');
            Route::get('create', [OfficialController::class, 'create'])->name('create');
            Route::post('', [OfficialController::class, 'store'])->name('store');
            Route::get('{id}/show', [OfficialController::class, 'edit'])->name('show');
            Route::put('{id}/update', [OfficialController::class, 'update'])->name('update');
            Route::delete('{id}/delete', [OfficialController::class, 'destroy'])->name('destroy');
        });

        Route::group(['prefix' => 'questions', 'as' => 'questions.'], function () {
            Route::get('', [QuestionareController::class, 'index'])->name('index');
            Route::get('create', [QuestionareController::class, 'create'])->name('create');
            Route::post('', [QuestionareController::class, 'store'])->name('store');
            Route::get('{id}/show', [QuestionareController::class, 'edit'])->name('show');
            Route::put('{id}/update', [QuestionareController::class, 'update'])->name('update');
            Route::delete('{id}/delete', [QuestionareController::class, 'destroy'])->name('destroy');
        });
    });

    Route::group(['prefix' => 'operational', 'as' => 'operational.'], function () {

        Route::get('analytic', [AnalyticController::class, 'index'])->name('analytic');

        Route::group(['prefix' => 'guests', 'as' => 'guests.'], function () {
            Route::get('', [GuestController::class, 'index'])->name('index');
            Route::get('{id}/show', [GuestController::class, 'show'])->name('show');
        });
    });
});

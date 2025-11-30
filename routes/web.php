<?php

use App\Data\Quests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/quests', function () {
    return Inertia::render('quests/index', [
        'quests' => Quests::all(),
    ]);
})->name('quests.index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';

// This catch-all route must come last
Route::get('/{slug}', function (string $slug) {
    $quest = Quests::find($slug);

    if (!$quest) {
        abort(404);
    }

    return Inertia::render('quests/show', [
        'quest' => $quest,
    ]);
})->name('quests.show');

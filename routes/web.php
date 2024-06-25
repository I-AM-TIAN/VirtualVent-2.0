<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//Ruta para logearse
Route::post('/api/login', [AuthController::class, 'login']);

Route::get('/admin', function () {
    return view('auth.superuser.index');
});

Route::get('/corporative', function () {
    return view('auth.corporative.index');
});

Route::get('/api/users', [AuthController::class, "index"]);

Route::get('/superusers', function () {
    return view('auth.superuser.superusers');
});

Route::get('/api/corporative', [AuthController::class, "corporative"]);

Route::get('/corporative', function () {
    return view('auth.corporative.corporative');
});

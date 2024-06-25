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
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
use App\Http\Controllers\RoomRentController;
use App\Http\Controllers\Auth\ApiRegisterController;
// use App\Http\Controllers\Auth\ApiRegisterController;

Route::apiResource('room_rents', RoomRentController::class);

// Route::apiResource('userRegister', ApiRegisterController::class);


Route::post('/register', [ApiRegisterController::class, 'register']);
Route::post('/login', [ApiRegisterController::class, 'login']);
Route::get('/details', [ApiRegisterController::class, 'details'])->middleware('auth:sanctum');

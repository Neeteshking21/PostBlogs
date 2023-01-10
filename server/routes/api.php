<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ArticalController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(UsersController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/signin', 'signin');
    Route::post('/logout', 'logout');
});
Route::controller(ArticalController::class)->group(function () {
    Route::get('/getArticals', 'getAllArticals');
    Route::get('/createArticals', 'createArticals');
    Route::get('/updateArticals', 'updateArticals');
    Route::get('/deleteArticals', 'deleteArticals');
});

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\ServiceController;
use App\Http\Controllers\API\EquipmentController;
use App\Http\Controllers\API\ServiceUserController;

Route::post('/add-order', [OrderController::class, 'store']);
Route::get('/orders', [OrderController::class, 'getOrders']);
Route::get('/edit-order/{id}', [OrderController::class, 'editOrder']);
Route::put('/update-order/{id}', [OrderController::class, 'updateOrder']);

Route::post('/add-serviceuser', [ServiceUserController::class, 'addServiceUser']);
Route::get('/serviceusers', [ServiceUserController::class, 'getServiceUsers']);
Route::get('/serviceuser-email/{email}', [ServiceUserController::class, 'getServiceUserByEmail']);

Route::post('/add-service', [ServiceController::class, 'addService']);
Route::post('/add-service', [ServiceController::class, 'addService']);

Route::post('/add-equipment', [EquipmentController::class, 'addEquipment']);
Route::get('/equipments', [EquipmentController::class, 'getEquipments']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

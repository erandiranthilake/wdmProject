<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\InquiryController;
use App\Http\Controllers\API\ServiceController;
use App\Http\Controllers\API\EquipmentController;
use App\Http\Controllers\API\ServiceUserController;

Route::post('/add-order', [OrderController::class, 'store']);
Route::get('/orders', [OrderController::class, 'getOrders']);
Route::get('/get-order/{id}', [OrderController::class, 'getOrder']);
Route::put('/update-order/{id}', [OrderController::class, 'updateOrder']);
Route::delete('/delete-order/{id}', [OrderController::class, 'deleteOrder']);
Route::get('/orders/customer/{id}', [OrderController::class, 'getOrderByCustomerId']);

Route::post('/add-serviceuser', [ServiceUserController::class, 'addServiceUser']);
Route::get('/serviceusers', [ServiceUserController::class, 'getServiceUsers']);
Route::get('/get-serviceuser/{id}', [ServiceUserController::class, 'getServiceUser']);
Route::get('/serviceuser-email/{email}', [ServiceUserController::class, 'getServiceUserByEmail']);
Route::get('/serviceuser-role/{role}', [ServiceUserController::class, 'getServiceUsersByRole']);


Route::post('/add-service', [ServiceController::class, 'addService']);
Route::get('/services', [ServiceController::class, 'getServices']);
Route::get('/get-service/{id}', [ServiceController::class, 'getService']);
Route::put('/update-service/{id}', [ServiceController::class, 'upDateService']);
Route::delete('/delete-service/{id}', [ServiceController::class, 'deleteService']);


Route::post('/add-equipment', [EquipmentController::class, 'addEquipment']);
Route::get('/equipments', [EquipmentController::class, 'getEquipments']);
Route::get('/get-equipment/{id}', [EquipmentController::class, 'getEquipment']);
Route::put('/update-equipment/{id}', [EquipmentController::class, 'upDateEquipment']);
Route::delete('/delete-equipment/{id}', [EquipmentController::class, 'deleteEquipment']);

Route::post('/add-inquiry', [InquiryController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

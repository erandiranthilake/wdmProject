<?php

namespace App\Http\Controllers\API;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function addService(Request $request)
    {
        $service = new Service;
        $service->ServiceName = $request->input('ServiceName');
        $service->Rate = $request->input('Rate');
        $service->save();

        return response()->json([
            'status' => 200,
            'message' => 'Service added successfully'
        ]);
    }
}

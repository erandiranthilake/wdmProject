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

    public function getServices(Request $request)
    {
        $services = Service::all();
        return response()->json([
            'status' => 200,
            'services' => $services

        ]);
    }

    public function getService($id)
    {
        $service = Service::find($id);

        return response()->json([
            'status' => 200,
            'service' => $service

        ]);
    }

    public function updateService(Request $request, $id)
    {
        $service = Service::find($id);

        $service->ServiceName = $request->input('ServiceName');
        $service->Rate = $request->input('Rate');
        $service->update();

        return response()->json([
            'status' => 200,
            'message' => 'Service updated successfully'

        ]);
    }

    public function deleteService($id)
    {
        $service = Service::find($id);
        $service->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Service deleted successfully'

        ]);
    }
}

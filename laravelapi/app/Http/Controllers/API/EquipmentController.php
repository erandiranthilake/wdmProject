<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Equipment;
use Illuminate\Http\Request;

class EquipmentController extends Controller
{
    public function addEquipment(Request $request)
    {
        $equipment = new Equipment();
        $equipment->EquipmentType = $request->input('EquipmentType');
        $equipment->Availability = $request->input('Availability');
        $equipment->save();

        return response()->json([
            'status' => 200,
            'message' => 'Equipment added successfully'
        ]);
    }

    public function getEquipments(Request $request)
    {
        $equipments = Equipment::all();
        return response()->json([
            'status' => 200,
            'equipments' => $equipments

        ]);
    }
}

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

    public function getEquipment($id)
    {
        error_log('Some message here.');

        $equipment = Equipment::find($id);

        return response()->json([
            'status' => 200,
            'equipment' => $equipment

        ]);
    }

    public function updateEquipment(Request $request, $id)
    {
        $equipment = Equipment::find($id);

        $equipment->EquipmentType = $request->input('EquipmentType');
        $equipment->Availability = $request->input('Availability');
        $equipment->update();

        return response()->json([
            'status' => 200,
            'message' => 'Equipment updated successfully'

        ]);
    }

    public function deleteEquipment($id)
    {
        $equipment = Equipment::find($id);
        $equipment->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Equipment deleted successfully'

        ]);
    }
}

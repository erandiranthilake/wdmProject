<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ServiceUser;
use Illuminate\Http\Request;

class ServiceUserController extends Controller
{
    public function addServiceUser(Request $request)
    {
        $serviceUser = new ServiceUser();
        $serviceUser->Fname = $request->input('Fname');
        $serviceUser->Minit = $request->input('Minit');
        $serviceUser->Lname = $request->input('Lname');
        $serviceUser->Email = $request->input('Email');
        $serviceUser->Password = $request->input('Password');
        $serviceUser->PhoneNumber = $request->input('PhoneNumber');
        $serviceUser->Street1 = $request->input('Street1');
        $serviceUser->Street2 = $request->input('Street2');
        $serviceUser->City = $request->input('City');
        $serviceUser->State = $request->input('State');
        $serviceUser->ZipCode = $request->input('ZipCode');
        $serviceUser->Ssn = $request->input('Ssn');
        $serviceUser->Role = $request->input('Role');
        $serviceUser->save();

        return response()->json([
            'status' => 200,
            'message' => 'User added successfully'
        ]);
    }

    public function getServiceUsers(Request $request)
    {
        $serviceUsers = ServiceUser::all();
        return response()->json([
            'status' => 200,
            'orders' => $serviceUsers

        ]);
    }

    public function getServiceUser($id)
    {
        $serviceUser = ServiceUser::find($id);

        return response()->json([
            'status' => 200,
            'serviceUser' => $serviceUser

        ]);
    }

    public function getServiceUserByEmail($email)
    {
        $serviceUser = ServiceUser::where('Email', $email)->firstOrFail();

        return response()->json([
            'status' => 200,
            'serviceUser' => $serviceUser

        ]);
    }

    public function getServiceUsersByRole($role)
    {
        $serviceUsers = ServiceUser::where('Role', $role)->get();

        return response()->json([
            'status' => 200,
            'serviceUsers' => $serviceUsers

        ]);
    }

    public function updateServiceUser(Request $request, $id)
    {
        $serviceUser = ServiceUser::find($id);

        $serviceUser->Fname = $request->input('Fname');
        $serviceUser->Minit = $request->input('Minit');
        $serviceUser->Lname = $request->input('Lname');
        $serviceUser->Email = $request->input('Email');
        $serviceUser->Password = $request->input('Password');
        $serviceUser->PhoneNumber = $request->input('PhoneNumber');
        $serviceUser->Street1 = $request->input('Street1');
        $serviceUser->Street2 = $request->input('Street2');
        $serviceUser->City = $request->input('City');
        $serviceUser->State = $request->input('State');
        $serviceUser->ZipCode = $request->input('ZipCode');
        $serviceUser->Ssn = $request->input('Ssn');
        $serviceUser->Role = $request->input('Role');
        $serviceUser->update();

        return response()->json([
            'status' => 200,
            'message' => 'User Updated successfully'
        ]);
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    public function store(Request $request)
    {
        $inquiry = new Inquiry();
        $inquiry->c_id = $request->input('c_id');
        $inquiry->Fname = $request->input('Fname');
        $inquiry->Lname = $request->input('Lname');
        $inquiry->Email = $request->input('Email');
        $inquiry->PhoneNumber = $request->input('PhoneNumber');
        $inquiry->Inquiry = $request->input('Inquiry');
        $inquiry->save();

        return response()->json([
            'status' => 200,
            'inquiry' => 'Inquiry added successfully'

        ]);
    }
}

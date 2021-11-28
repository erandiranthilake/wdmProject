<?php

namespace App\Http\Controllers\API;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        error_log('Some message here.');
        $order = new Order;
        $order->e_id = $request->input('e_id');
        $order->c_id = $request->input('c_id');
        $order->weight = $request->input('weight');
        $order->service = $request->input('service');
        $order->amount = $request->input('amount');
        $order->status = $request->input('status');
        $order->type = $request->input('type');
        $order->miscellaneous = $request->input('miscellaneous');
        $order->save();

        return response()->json([
            'status' => 200,
            'message' => 'Order added successfully'

        ]);
    }

    public function getOrders(Request $request)
    {
        error_log('Some message here.');
        $orders = Order::all();
        return response()->json([
            'status' => 200,
            'orders' => $orders

        ]);
    }

    public function editOrder($id)
    {
        error_log('Some message here.');
        $order = Order::find($id);

        return response()->json([
            'status' => 200,
            'order' => $order

        ]);
    }

    public function updateOrder(Request $request, $id)
    {
        $order = Order::find($id);

        $order->e_id = $request->input('e_id');
        $order->c_id = $request->input('c_id');
        $order->weight = $request->input('weight');
        $order->service = $request->input('service');
        $order->amount = $request->input('amount');
        $order->status = $request->input('status');
        $order->type = $request->input('type');
        $order->miscellaneous = $request->input('miscellaneous');
        $order->update();

        return response()->json([
            'status' => 200,
            'message' => 'Order updated successfully'

        ]);
    }
}

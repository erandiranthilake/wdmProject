<?php

namespace App\Http\Controllers\API;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = new Order;
        $order->e_id = $request->input('e_id');
        $order->c_id = $request->input('c_id');
        $order->weight = $request->input('weight');
        $order->service = $request->input('service');
        $order->amount = $request->input('amount');
        $order->status = $request->input('status');
        $order->type = $request->input('type');
        $order->paymentMethod = $request->input('paymentMethod');
        $order->paymentStatus = $request->input('paymentStatus');
        $order->miscellaneous = $request->input('miscellaneous');
        $order->save();

        return response()->json([
            'status' => 200,
            'message' => 'Order added successfully'

        ]);
    }

    public function getOrders(Request $request)
    {
        $orders = Order::all();
        return response()->json([
            'status' => 200,
            'orders' => $orders

        ]);
    }

    public function getOrder($id)
    {
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
        $order->type = $request->input('paymentMethod');
        $order->type = $request->input('paymentStatus');
        $order->miscellaneous = $request->input('miscellaneous');
        $order->update();

        return response()->json([
            'status' => 200,
            'message' => 'Order updated successfully'

        ]);
    }

    public function deleteOrder($id)
    {
        $order = Order::find($id);
        $order->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Order deleted successfully'

        ]);
    }

    public function getOrderByCustomerId($customerId)
    {
        $customerOrders = Order::where('c_id', $customerId)->get();

        return response()->json([
            'status' => 200,
            'customerOrders' => $customerOrders

        ]);
    }
}

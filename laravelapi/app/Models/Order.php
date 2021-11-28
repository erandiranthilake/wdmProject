<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
        'e_id',
        'c_id',
        'weight',
        'service',
        'amount',
        'status',
        'type',
        'miscellaneous'
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceUser extends Model
{
    use HasFactory;
    protected $table = 'serviceusers';
    protected $fillable = [
        'Fname',
        'Minit',
        'Lname',
        'Email',
        'Password',
        'PhoneNumber',
        'Street1',
        'Street2',
        'City',
        'State',
        'ZipCode',
        'Ssn',
        'Role'
    ];
}

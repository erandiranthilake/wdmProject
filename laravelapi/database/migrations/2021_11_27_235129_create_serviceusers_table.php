<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('serviceusers', function (Blueprint $table) {
            $table->id();
            $table->char('Fname');
            $table->char('Minit');
            $table->char('Lname');
            $table->char('Email');
            $table->char('Password');
            $table->bigInteger('PhoneNumber');
            $table->char('Street1');
            $table->char('Street2');
            $table->char('City');
            $table->char('State');
            $table->bigInteger('ZipCode');
            $table->bigInteger('Ssn');
            $table->char('Role');
            $table->timestamps();
        });

        DB::statement("INSERT INTO `serviceusers` (`id`, `Fname`, `Minit`, `Lname`, `Email`, `Password`, `PhoneNumber`, `Street1`, `Street2`, `City`, `State`, `ZipCode`, `Ssn`, `Role`, `created_at`, `updated_at`) VALUES
        (1, 'Customer', 'K', 'Customer Lastname', 'customer@gmail.com', 'customer1234', 123456, '3508 Flower Dr, wewe', 'wewe', 'Flower Mound', 'TX', 12345, 0, 'ROLE_CUSTOMER', '2021-11-28 06:44:11', '2021-11-28 06:44:11'),
        (2, 'Manager', 'K', 'Manager LastName', 'manager@gmail.com', 'manager1234', 12345678, '1234 Flower Drive', 'Street 2', 'Flower Mound', 'TX', 12345, 0, 'ROLE_MANAGER', '2021-11-28 06:47:04', '2021-11-28 06:47:04'),
        (3, 'Employer', 'K', 'Employer Lastname', 'employer@gmail.com', 'employer1234', 1234567, '3508 Flower Dr,', 'wewe', 'Flower Mound', 'TX', 12345, 3456789, 'ROLE_USER', '2021-11-28 07:08:31', '2021-11-28 07:08:31'),
        (4, 'SuperAdmin', 'K', 'SuperAdmin Lastname', 'superadmin@gmail.com', 'superadmin1234', 1234456, '3508 Flower Dr,', 'wewe', 'Flower Mound', 'TX', 12345, 123456, 'ROLE_SUPER_ADMIN', '2021-11-28 07:11:34', '2021-11-28 07:11:34'),
        (5, 'Manager2', 'K', 'ManagerLastName', 'manager2@gmail.com', 'manager1234', 1234556, '3508 Flower Dr, wewe', 'wewe', 'Flower Mound', 'TX', 12344, 456789, 'ROLE_MANAGER', '2021-11-28 07:15:41', '2021-11-28 07:15:41');
        ");

        //     DB::table(`serviceusers`)
        //     ->insert(array(
        //     array(`name` => `Plan 1`,`price` => 10),
        //     array(`name` => `Plan 2`,`price` => 50),
        //     array(`name` => `Plan 3`,`price` => 100),
        // ));
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('serviceusers');
    }
}

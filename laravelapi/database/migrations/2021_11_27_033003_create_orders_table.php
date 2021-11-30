<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('e_id');
            $table->integer('c_id');
            $table->double('weight');
            $table->char('service');
            $table->double('amount');
            $table->char('status');
            $table->char('type');
            $table->char('paymentMethod');
            $table->char('paymentStatus');
            $table->char('miscellaneous');
            $table->timestamps();
        });

        DB::statement("INSERT INTO `orders` (`id`, `e_id`, `c_id`, `weight`, `service`, `amount`, `status`, `type`, `paymentMethod`,`paymentStatus`, `miscellaneous`, `created_at`, `updated_at`) VALUES
        (1, 1, 1, 25, 'Washing', 250, 'Complete', 'Pickup', 'Credit card','Not Completed','No Comments', '2021-11-28 05:24:52', '2021-11-28 05:31:50'),
        (2, 2, 2, 34, 'Drying', 45, 'Pending', 'Pickup', 'Credit card','Not Completed', 'Customer pickup', '2021-11-28 05:42:50', '2021-11-28 05:42:50');");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}

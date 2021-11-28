<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->char('ServiceName');
            $table->double('Rate');
            $table->timestamps();
        });

        DB::statement("INSERT INTO `services` (`id`, `ServiceName`, `Rate`, `created_at`, `updated_at`) VALUES
        (1, 'Washing', 20, '2021-11-28 07:32:47', '2021-11-28 07:32:47'),
        (2, 'Drying', 20, '2021-11-28 07:33:07', '2021-11-28 07:33:07');");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}

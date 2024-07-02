<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomRentsTable extends Migration
{
    public function up()
    {
        Schema::create('room_rents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->decimal('price', 10, 2);
            $table->string('location');
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->integer('balconies');
            $table->string('furnished_status');
            $table->decimal('super_built_up_area', 10, 2);
            $table->decimal('price_per_sqft', 10, 2);
            $table->integer('floor');
            $table->integer('total_floors');
            $table->string('facing');
            $table->integer('age_of_construction');
            $table->string('image_path')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('room_rents');
    }
}

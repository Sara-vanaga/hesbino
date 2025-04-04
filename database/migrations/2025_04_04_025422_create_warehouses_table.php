<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWarehousesTable extends Migration
{
    public function up()
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('کد انبار');
            $table->string('name')->comment('نام انبار');
            $table->text('address')->nullable()->comment('آدرس');
            $table->string('manager')->nullable()->comment('مسئول انبار');
            $table->boolean('is_active')->default(true)->comment('وضعیت فعال');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('warehouse_stocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('warehouse_id')->constrained()->comment('شناسه انبار');
            $table->foreignId('product_id')->constrained()->comment('شناسه کالا');
            $table->decimal('quantity', 20, 2)->default(0)->comment('موجودی');
            $table->decimal('minimum_stock', 20, 2)->default(0)->comment('حداقل موجودی');
            $table->decimal('maximum_stock', 20, 2)->default(0)->comment('حداکثر موجودی');
            $table->timestamps();

            $table->unique(['warehouse_id', 'product_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('warehouse_stocks');
        Schema::dropIfExists('warehouses');
    }
}
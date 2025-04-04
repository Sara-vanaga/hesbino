<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // جدول کالاها و خدمات
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('کد کالا');
            $table->string('name')->comment('نام کالا');
            $table->enum('type', ['product', 'service'])->comment('نوع: کالا یا خدمات');
            $table->string('unit')->comment('واحد');
            $table->decimal('purchase_price', 20, 2)->default(0)->comment('قیمت خرید');
            $table->decimal('sale_price', 20, 2)->default(0)->comment('قیمت فروش');
            $table->string('barcode')->nullable()->comment('بارکد');
            $table->text('description')->nullable()->comment('توضیحات');
            $table->boolean('is_active')->default(true)->comment('وضعیت فعال');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};
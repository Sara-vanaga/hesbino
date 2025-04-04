<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesAndItemsTable extends Migration
{
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('شماره فاکتور');
            $table->foreignId('person_id')->constrained('persons')->comment('شناسه شخص');
            $table->enum('type', ['sale', 'purchase', 'return_sale', 'return_purchase'])
                  ->comment('نوع: فروش، خرید، برگشت از فروش، برگشت از خرید');
            $table->date('date')->comment('تاریخ');
            $table->decimal('subtotal', 20, 2)->default(0)->comment('جمع کل');
            $table->decimal('discount', 20, 2)->default(0)->comment('تخفیف');
            $table->decimal('tax', 20, 2)->default(0)->comment('مالیات');
            $table->decimal('total', 20, 2)->default(0)->comment('مبلغ نهایی');
            $table->text('description')->nullable()->comment('توضیحات');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('invoice_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoice_id')->constrained()->onDelete('cascade')->comment('شناسه فاکتور');
            $table->foreignId('product_id')->constrained()->comment('شناسه کالا');
            $table->decimal('quantity', 20, 2)->comment('تعداد');
            $table->decimal('price', 20, 2)->comment('قیمت واحد');
            $table->decimal('discount', 20, 2)->default(0)->comment('تخفیف');
            $table->decimal('tax', 20, 2)->default(0)->comment('مالیات');
            $table->decimal('total', 20, 2)->comment('جمع کل');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('invoice_items');
        Schema::dropIfExists('invoices');
    }
}
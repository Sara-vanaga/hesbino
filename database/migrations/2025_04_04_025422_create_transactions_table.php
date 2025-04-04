<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('شماره تراکنش');
            $table->foreignId('bank_id')->constrained()->comment('شناسه حساب بانکی');
            $table->foreignId('person_id')->nullable()->constrained('persons')->comment('شناسه شخص');
            $table->enum('type', ['deposit', 'withdraw', 'transfer'])->comment('نوع: واریز، برداشت، انتقال');
            $table->decimal('amount', 20, 2)->comment('مبلغ');
            $table->date('date')->comment('تاریخ');
            $table->string('reference_number')->nullable()->comment('شماره مرجع');
            $table->text('description')->nullable()->comment('توضیحات');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
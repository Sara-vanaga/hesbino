<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanksTable extends Migration
{
    public function up()
    {
        Schema::create('banks', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('کد حساب');
            $table->string('name')->comment('نام حساب');
            $table->enum('type', ['bank', 'cash', 'petty_cash'])->comment('نوع: بانک، صندوق، تنخواه');
            $table->string('account_number')->nullable()->comment('شماره حساب');
            $table->string('card_number')->nullable()->comment('شماره کارت');
            $table->string('sheba')->nullable()->comment('شماره شبا');
            $table->string('branch')->nullable()->comment('شعبه');
            $table->decimal('initial_balance', 20, 2)->default(0)->comment('موجودی اولیه');
            $table->boolean('is_active')->default(true)->comment('وضعیت فعال');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('banks');
    }
}
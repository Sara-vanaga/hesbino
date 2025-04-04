<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonsTable extends Migration
{
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->comment('کد شخص');
            $table->string('name')->comment('نام شخص');
            $table->string('company_name')->nullable()->comment('نام شرکت');
            $table->string('national_id')->nullable()->comment('کد ملی');
            $table->string('economic_code')->nullable()->comment('کد اقتصادی');
            $table->string('registration_number')->nullable()->comment('شماره ثبت');
            $table->string('phone')->nullable()->comment('تلفن');
            $table->string('mobile')->nullable()->comment('موبایل');
            $table->string('email')->nullable()->comment('ایمیل');
            $table->text('address')->nullable()->comment('آدرس');
            $table->enum('type', ['customer', 'vendor', 'shareholder'])->comment('نوع شخص');
            $table->decimal('credit_limit', 20, 2)->default(0)->comment('سقف اعتبار');
            $table->boolean('is_active')->default(true)->comment('وضعیت فعال');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('persons');
    }
}
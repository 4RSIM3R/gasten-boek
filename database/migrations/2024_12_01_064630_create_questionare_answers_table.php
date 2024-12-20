<?php

use App\Models\Guest;
use App\Models\Questionare;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('questionare_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Guest::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Questionare::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->text('answer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionare_answers');
    }
};

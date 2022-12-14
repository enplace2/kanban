<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sprint extends Model
{
    use HasFactory;

    public function project()
    {
        $this->belongsTo(Project::class);
    }
}

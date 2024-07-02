<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomRent extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'price', 'location', 'bedrooms', 'bathrooms', 'balconies', 'furnished_status', 'super_built_up_area', 'price_per_sqft', 'floor', 'total_floors', 'facing', 'age_of_construction','image_path'];
}


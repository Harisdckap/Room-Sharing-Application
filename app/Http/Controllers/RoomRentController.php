<?php

namespace App\Http\Controllers;

use App\Models\RoomRent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RoomRentController extends Controller
{
    public function index()
    {
        return RoomRent::all();
    }
    
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'price' => 'required|numeric',
                'location' => 'required|string|max:255',
                'bedrooms' => 'required|integer',
                'bathrooms' => 'required|integer',
                'balconies' => 'required|integer',
                'furnished_status' => 'required|string|max:255',
                'super_built_up_area' => 'required|numeric',
                'price_per_sqft' => 'required|numeric',
                'floor' => 'required|integer',
                'total_floors' => 'required|integer',
                'facing' => 'required|string|max:255',
                'age_of_construction' => 'required|integer',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
    
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('public/images');
                $validatedData['image_path'] = Storage::url($path);
            } else {
                $validatedData['image_path'] = null; 
            }
    
            $roomRent = RoomRent::create($validatedData);
    
            return response()->json($roomRent, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    

    public function show(RoomRent $roomRent)
    {
        return $roomRent;
    }

    public function update(Request $request, RoomRent $roomRent)
    {
        $validatedData = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric',
            'location' => 'sometimes|required|string|max:255',
            'bedrooms' => 'sometimes|required|integer',
            'bathrooms' => 'sometimes|required|integer',
            'balconies' => 'sometimes|required|integer',
            'furnished_status' => 'sometimes|required|string|max:255',
            'super_built_up_area' => 'sometimes|required|numeric',
            'price_per_sqft' => 'sometimes|required|numeric',
            'floor' => 'sometimes|required|integer',
            'total_floors' => 'sometimes|required|integer',
            'facing' => 'sometimes|required|string|max:255',
            'age_of_construction' => 'sometimes|required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $roomRent->update($validatedData);

        return response()->json($roomRent);
    }


    public function destroy(RoomRent $roomRent)
    {
        $roomRent->delete();

        return response()->json(null, 204);
    }
}

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class ApiRegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
       
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);  
        }

        $data = $request->except('password_confirmation'); // Exclude password_confirmation
        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);
        $response['token'] = $user->createToken('MyApp')->plainTextToken;
        $response['name'] = $user->name;

        return response()->json($response, 201); // 201 Created
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);  
        }

        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
            $user = Auth::user();
            $response['token'] = $user->createToken('MyApp')->plainTextToken;
            $response['name'] = $user->name;
            return response()->json($response, 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);  
        }
    }

    public function details()
    {
        $user = Auth::user();
        return response()->json(['user' => $user], 200);
    }
}

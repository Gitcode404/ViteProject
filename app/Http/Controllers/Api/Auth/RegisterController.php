<?php
namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\BuUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        $user = BuUser::create([
            'bu_name'   => $request->name,
            'bu_passwd' => Hash::make($request->password),
            'bu_passwd_show'=>$request->password
        ]);

        return response([
            'message' => 'User registered successfully',
            'user'    => $user,
        ], 201);
    }

    public function login(Request $request)
    {
        // return response(['name'=>$request->name, 'password' => $request->password], 200);
        

        $request->validate([
            'email'    => 'required|string',
            'password' => 'required|string',
        ]);

        // Find user by bu_name
        $user = BuUser::where('bu_name', $request->email)->first();

        // dd( $user);
        if (! $user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json([
            'message' => 'Login successful',
            'user'    => $user,
        ]);

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

}

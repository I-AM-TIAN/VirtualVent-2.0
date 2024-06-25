<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Comprobamos que el email y la contraseña han sido introducidos
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('username', 'password');

        if (Auth::attempt(['user_name' => $credentials['username'], 'password' => $credentials['password']])) {
            $tipo_usuario = Auth::user()->tipo_usuario_id;
            switch ($tipo_usuario) {
                case 1:
                    return response()->json(['message' => 'Login successful', 'redirect' => '/admin'], 200);
                case 2:
                    return response()->json(['message' => 'Login successful', 'redirect' => '/corporative'], 200);
                default:
                    return response()->json(['message' => 'Tipo de usuario no válido'], 403);
            }
        }

        return response()->json(['message' => 'Los datos introducidos no son correctos'], 401);
    }
}

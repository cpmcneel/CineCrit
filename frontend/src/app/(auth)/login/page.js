"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);

                // Redirect to dashboard or home
                // For now, just alert
                alert('Login successful!');
            } else {
                // Handle login failure
                console.error('Login failed');
                alert('Invalid email or password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Something went wrong. Try again.');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-300 to-red-400">
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-black">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-black mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-black mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="text-right text-sm">
                        <Link href="/forgot-password" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-300 to-red-400 text-white p-2 rounded transition hover:brightness-110"
                        >
                            Log In
                        </button>
                        <Link href="/sign-up" className="w-full">
                            <div className="w-full bg-gray-100 text-black p-2 rounded transition hover:bg-gray-200 text-center">
                                Sign Up
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
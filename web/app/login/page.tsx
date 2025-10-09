"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("patient"); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    
    localStorage.setItem("userRole", role);

  
    if (role === "patient") router.push("/dashboard/patient");
    if (role === "doctor") router.push("/dashboard/doctor");
    if (role === "homeDoctor") router.push("/dashboard/home-doctor");
    if (role === "admin") router.push("/dashboard/admin");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <div>
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block text-gray-600">Password</label>
          <input type="password" className="w-full p-2 border rounded" required />
        </div>

        
        <div>
          <label className="block text-gray-600">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="homeDoctor">Home Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

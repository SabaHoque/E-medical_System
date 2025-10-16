"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ for navigation

export default function PatientSettings() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    alert("Settings saved successfully!");
    
    // ✅ Redirect to patient dashboard after saving
    router.push("/dashboard/patient");
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Patient Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Omor"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="saba@example.com"
          />
        </div>

        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="123-456-7890"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          <label>Enable notifications for appointments and updates</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

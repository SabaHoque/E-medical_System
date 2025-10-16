"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ for redirect

export default function HomeDoctorSettings() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialization: "",
    availability: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Settings saved successfully!");
    
    // ✅ Redirect to Home Doctor Dashboard
    router.push("/dashboard/home-doctor");
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Home Doctor Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Dr. Smith"
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
            placeholder="doctor@example.com"
          />
        </div>

        <div>
          <label className="block font-medium">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full mt-1 border p-2 rounded"
            placeholder="Cardiology, General Medicine, etc."
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
          />
          <label>Available for appointments</label>
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

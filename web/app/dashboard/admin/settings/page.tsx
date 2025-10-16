"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ for redirect

export default function AdminSettings() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    systemName: "EyeCareAI",
    maintenanceMode: false,
    contactEmail: "support@eyecare.ai",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Admin settings saved successfully!");
    
    // ✅ Redirect to Admin Dashboard
    router.push("/dashboard/admin");
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium">System Name</label>
          <input
            type="text"
            name="systemName"
            value={formData.systemName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="VisionCare AI"
          />
        </div>

        <div>
          <label className="block font-medium">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="admin@example.com"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="maintenanceMode"
            checked={formData.maintenanceMode}
            onChange={handleChange}
          />
          <label>Enable Maintenance Mode</label>
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

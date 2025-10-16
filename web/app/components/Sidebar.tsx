"use client";

import Link from "next/link";

type Props = {
  role: "patient" | "doctor" | "homeDoctor" | "admin";
};

export default function Sidebar({ role }: Props) {
  const menus = {
    patient: [
      { name: "Dashboard", path: "/dashboard/patient" },
      { name: "AI Screening", path: "/dashboard/patient/ai" },
      { name: "Appointments", path: "/dashboard/patient/appointments" },
      { name: "Reports", path: "/dashboard/patient/reports" },
      { name: "My Profile", path: "/dashboard/patient/Profile" }, 
      { name: "Map & Emergency", path: "/dashboard/patient/map" },
      { name: "Settings", path: "/dashboard/patient/settings" },
    ],
    doctor: [
      { name: "Dashboard", path: "/dashboard/doctor" },
      { name: "Patient Cases", path: "/dashboard/doctor/cases" },
      { name: "Teleconsultations", path: "/dashboard/doctor/teleconsult" },
      { name: "Prescriptions", path: "/dashboard/doctor/prescriptions" },
      { name: "Availability", path: "/dashboard/doctor/availability" },
      { name: "Settings", path: "/dashboard/doctor/settings" },
    ],
    homeDoctor: [
      { name: "Dashboard", path: "/dashboard/home-doctor" },
      { name: "My Requests", path: "/dashboard/home-doctor/requests" },
      { name: "Availability", path: "/dashboard/home-doctor/availability" },
      { name: "Service Area", path: "/dashboard/home-doctor/service-area" },
      { name: "Reports", path: "/dashboard/home-doctor/reports" },
      { name: "Settings", path: "/dashboard/home-doctor/settings" },
    ],
    admin: [
      { name: "Dashboard", path: "/dashboard/admin" },
      { name: "User Management", path: "/dashboard/admin/users" },
      { name: "Hospitals & Ambulances", path: "/dashboard/admin/hospitals" },
      { name: "AI Monitoring", path: "/dashboard/admin/ai" },
      { name: "System Logs", path: "/dashboard/admin/logs" },
      { name: "Settings", path: "/dashboard/admin/settings" },
    ],
  };

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">EyeCareAI</h2>
      <ul className="space-y-4">
        {menus[role].map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.path}
              className="block p-2 rounded hover:bg-blue-100 hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

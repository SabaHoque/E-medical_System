"use client"; 

import { useEffect, useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import WelcomeBanner from "@/app/components/WelcomBanner";
import InfoCards from "@/app/components/InfoCard";


export default function PatientDashboard() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem("patientProfile");
    if (savedData) {
      const profile = JSON.parse(savedData);
      const fields = Object.values(profile);
      const filled = fields.filter((f) => f !== "").length;
      const percent = Math.round((filled / fields.length) * 100);
      setCompletion(percent);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="patient" />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 overflow-y-auto">
          <WelcomeBanner name="Saba (Patient)" />


          <InfoCards
            cards={[
              { title: "AI Screenings", value: 3 },
              { title: "Appointments", value: 1 },
              { title: "Reports", value: 5 },
              { title: "Profile Completion", value: `${completion}%` },
            ]}
          />
        </main>
      </div>
    </div>
  );
}

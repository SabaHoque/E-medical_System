"use client";

import dynamic from "next/dynamic";

const HospitalMap = dynamic(() => import("../../../components/hospitalMap"), {
  ssr: false, // important for leaflet
});

export default function HospitalMapPage() {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        🏥 Nearby Hospitals (Dhaka)
      </h1>
      <p className="text-center text-gray-600 mb-6">
        View hospitals and medical centers around Dhaka, Bangladesh.
      </p>
      <HospitalMap />
    </div>
  );
}

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function HospitalMap() {
  // custom hospital marker
  const hospitalIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
    iconSize: [35, 35],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30],
  });

  // sample nearby hospitals in Dhaka
  const hospitals = [
    {
      id: 1,
      name: "Square Hospitals Ltd.",
      contact: "+880-2-8144400",
      lat: 23.7520,
      lng: 90.3925,
    },
    {
      id: 2,
      name: "Popular Diagnostic Centre",
      contact: "+880-2-9636426",
      lat: 23.7583,
      lng: 90.3894,
    },
    {
      id: 3,
      name: "United Hospital Limited",
      contact: "+880-2-8836000",
      lat: 23.7935,
      lng: 90.4145,
    },
    {
      id: 4,
      name: "Labaid Specialized Hospital",
      contact: "+880-2-9676356",
      lat: 23.7390,
      lng: 90.3828,
    },
    {
      id: 5,
      name: "Bangabandhu Sheikh Mujib Medical University (BSMMU)",
      contact: "+880-2-55165001",
      lat: 23.7381,
      lng: 90.3965,
    },
  ];

  return (
    <MapContainer
      center={[23.78, 90.40]} // center on Dhaka
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "70vh", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hospitals.map((hospital) => (
        <Marker
          key={hospital.id}
          position={[hospital.lat, hospital.lng]}
          icon={hospitalIcon}
        >
          <Popup>
            <div>
              <h2 className="font-semibold text-blue-700">{hospital.name}</h2>
              <p className="font-medium text-gray-800">☎️ {hospital.contact}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

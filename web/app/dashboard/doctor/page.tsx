import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import WelcomeBanner from "@/app/components/WelcomBanner";

export default function DoctorDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="doctor" />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 overflow-y-auto">
          <WelcomeBanner name="Dr. Omor" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-4">Patient Case Queue</h3>
              <ul className="space-y-3">
                <li className="p-3 border rounded">Patient A – AI Suggests Cataract (92%)</li>
                <li className="p-3 border rounded">Patient B – AI Suggests Normal</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-4">Upcoming Teleconsultations</h3>
              <p>10:00 AM – Patient A</p>
              <p>11:30 AM – Patient B</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

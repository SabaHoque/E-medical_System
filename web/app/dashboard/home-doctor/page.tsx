import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import WelcomeBanner from "@/app/components/WelcomBanner";
export default function HomeDoctorDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="homeDoctor" />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 overflow-y-auto">
          <WelcomeBanner name="Dr. Alex (Home Doctor)" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">Incoming Visit Requests</h3>
              <p>Patient C – Address: XYZ Street</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Accept</button>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">My Availability</h3>
              <p>Available: Mon–Fri, 9 AM – 5 PM</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Edit Schedule</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

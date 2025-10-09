import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import WelcomeBanner from "@/app/components/WelcomBanner";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="admin" />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 overflow-y-auto">
          <WelcomeBanner name="System Admin" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">User Management</h3>
              <p>Patients: 120</p>
              <p>Doctors: 15</p>
              <p>Home Doctors: 5</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">Hospital & Ambulance Listings</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Manage</button>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">AI Model Performance</h3>
              <p>Accuracy: 91%</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Retrain</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";

export default function HomeDoctorInfoPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
         Home Doctor Service — Dhaka, Bangladesh
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Below is a list of home doctors specializing in <b>Eye Health</b> who provide
        at-home consultation services within Dhaka.
      </p>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-100 border-b">
            <tr>
              <th className="text-left p-3 font-semibold text-gray-700">#</th>
              <th className="text-left p-3 font-semibold text-gray-700">Doctor Name</th>
              <th className="text-left p-3 font-semibold text-gray-700">Specialization</th>
              <th className="text-left p-3 font-semibold text-gray-700">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">1</td>
              <td className="p-3 font-medium">Dr. Ahsan Rahman</td>
              <td className="p-3">Ophthalmologist (Eye Specialist)</td>
              <td className="p-3 text-blue-700 font-semibold">+8801781-234567</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">2</td>
              <td className="p-3 font-medium">Dr. Nusrat Jahan</td>
              <td className="p-3">Retina & Cornea Specialist</td>
              <td className="p-3 text-blue-700 font-semibold">+8801912-345678</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">3</td>
              <td className="p-3 font-medium">Dr. Kamal Hossain</td>
              <td className="p-3">Cataract & Glaucoma Consultant</td>
              <td className="p-3 text-blue-700 font-semibold">+8801555-678901</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">4</td>
              <td className="p-3 font-medium">Dr. Shaila Akter</td>
              <td className="p-3">Pediatric Eye Care Specialist</td>
              <td className="p-3 text-blue-700 font-semibold">+8801777-890123</td>
            </tr>
            <tr>
              <td className="p-3">5</td>
              <td className="p-3 font-medium">Dr. Rezaul Karim</td>
              <td className="p-3">General Eye Health Consultant</td>
              <td className="p-3 text-blue-700 font-semibold">+8801888-123456</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">
        These doctors provide in-home eye health services exclusively within Dhaka, Bangladesh.
      </p>
    </div>
  );
}

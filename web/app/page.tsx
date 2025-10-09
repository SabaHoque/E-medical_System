import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white p-10">
        <h1 className="text-5xl font-bold mb-4">EyeCareAI</h1>
        <p className="text-lg mb-6">
          AI-Powered Eye Disease Detection, Teleconsultation, and Emergency Support
        </p>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-blue-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-900"
          >
            Create Account
          </Link>
        </div>
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10 bg-gray-50 text-center">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-bold mb-2">AI Eye Screening</h3>
          <p>Upload images and get quick AI-assisted reports.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-bold mb-2">Teleconsultation</h3>
          <p>Consult with certified doctors online.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-bold mb-2">Home Doctor Service</h3>
          <p>Book in-person visits at your home.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-bold mb-2">Emergency Support</h3>
          <p>Find nearby hospitals and ambulances quickly.</p>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 p-4 text-center">
        <p>© 2025 EyeCareAI. All rights reserved.</p>
      </footer>
    </main>
  );
}

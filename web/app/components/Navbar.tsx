import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-lg font-bold">Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Notification Button */}
        <button className="relative">
          <span className="text-2xl">🔔</span>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <Image
          src="/avatar.png"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
}

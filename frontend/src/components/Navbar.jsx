import React from "react";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white opacity-70 text-black shadow-lg font-[Noto Nastaliq Urdu]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + KISAANBOT */}
        <div className="flex items-center gap-3">
          <img src="/logo1.png" alt="KisaanBot Logo" className="h-16" />
          <span className="text-2xl font-bold">KISAANBOT</span>
        </div>

        {/* Right: Nav Links + Login */}
        <div className="flex items-center gap-6 text-lg">
          <span className="cursor-pointer hover:text-yellow-300 transition">بوم</span>
          <span className="cursor-pointer hover:text-yellow-300 transition">دکان</span>
          <span className="cursor-pointer hover:text-yellow-300 transition">پروفائل</span>
          <button className="flex items-center gap-2 bg-green-200 text-green-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md">
            <LogIn size={20} />
            لاگ ان کریں
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



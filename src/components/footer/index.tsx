import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Povert Logo" className="w-10 h-10" />
            <h2 className="text-xl font-bold">Povert</h2>
          </div>
          <p className="text-gray-400 mt-2 text-sm">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic, or web designs.
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={16} /> (816) 932-1000
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <MapPin size={16} /> 4801 Rockhill Road, Kansas City, MO 64110
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 text-gray-300 text-sm gap-4">
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Our Founder</li>
            <li className="hover:text-white cursor-pointer">Education</li>
            <li className="hover:text-white cursor-pointer">Entrepreneurship</li>
            <li className="hover:text-white cursor-pointer">Child Education</li>
            <li className="hover:text-white cursor-pointer">Grants</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Multimedia</li>
            <li className="hover:text-white cursor-pointer">Governance</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section (Newsletter) */}
        <div className="bg-[#1E9FD9] p-6 rounded-lg text-black relative">
          <p className="font-semibold">
            Subscribe to our mailing list to get the <span className="font-bold">update to your email.</span>
          </p>
          <button className="mt-4 text-white font-bold underline">
            SIGN UP NOW
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        &copy; Copyright 2019 <span className="text-[#1E9FD9]">Povert</span>. All rights reserved.
      </div>
    </footer>
  );
}

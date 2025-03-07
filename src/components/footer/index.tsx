import { MapPin, Phone } from "lucide-react";
import MainLogo from "../../assets/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <img src={MainLogo} alt="Povert Logo" className="w-40 md:w-48" />
          {/* Copyright */}
          <div className="text-center text-gray-200 pt-2 text-sm md:text-base">
            &copy; Copyright 2019 <span className="text-[#1E9FD9]">Povert</span>. All rights reserved.
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 max-w-md">
            <p className="text-gray-200 text-sm md:text-base">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic, or web designs.
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone size={20} className="text-[#1E9FD9]" /> (816) 932-1000
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} className="text-[#1E9FD9]" /> 4801 Rockhill Road, Kansas City, MO 64110
            </p>
          </div>

          {/* Center Section */}
          <div className="grid grid-cols-2 gap-6 text-gray-300 text-sm">
            <ul className="space-y-2">
              <li className="hover:text-[#1E9FD9] cursor-pointer">Our Founder</li>
              <li className="hover:text-[#1E9FD9] cursor-pointer">Education</li>
              <li className="hover:text-[#1E9FD9] cursor-pointer">Entrepreneurship</li>
              <li className="hover:text-[#1E9FD9] cursor-pointer">Child Education</li>
              <li className="hover:text-[#1E9FD9] cursor-pointer">Grants</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:text-[#1E9FD9] cursor-pointer">Multimedia</li>
              <li className="hover:text-[#1E9FD9] cursor-pointer">Governance</li>
              <li className="hover:text-[#1E9FD9] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Right Section (Newsletter) */}
          <div className="bg-[#1E9FD9] p-6 rounded-lg text-white w-full md:w-[400px]">
            <p className="font-normal text-lg md:text-2xl">
              Subscribe to our mailing list to get the <span className="font-bold">latest updates.</span>
            </p>
            <button className="mt-4 text-white font-bold underline">
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import GnsWhite from "../../assets/gns-white.png"


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white mt-[120px] ">
      <div className="custom-container py-[80px]  grid md:grid-cols-4 gap-8 items-center">
        {/* Logo & Description */}
        <div>
         <img src={GnsWhite} alt="white logo" />
          <p className="text-gray-400 text-sm ">
            Design Analysis & Evaluation Introduction to API Design Analysis &
            Evaluation Introduction to API Design Analysis & Evaluation
            Introduction.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
            Ro‘yxatdan o‘tish
          </button>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold">Navigation</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Sovrinlar</li>
            <li>Nizom</li>
            <li>Maqolalar</li>
            <li>FAQ</li>
            <li>Bog‘lanish</li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold">Contacts</h3>
          <p className="text-gray-400 text-sm mt-3">(816) 932-1000</p>
          <p className="text-gray-400 text-sm">
            4801 Rockhill Road, Kansas City, MO 64110
          </p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe</h3>
          <p className="text-gray-400 text-sm mt-3">
            Lorem ipsum dolor sit ipsum dolor sit ipsum dolor sit
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-500 px-3 py-2 rounded-lg text-white text-sm focus:outline-none"
            />
            <button className="mt-3 w-full bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
              Send Email
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-gray-700 pt-5 flex justify-between text-center text-gray-500 text-sm custom-container">
        <p>Lorem Ipsum dolor sit lorem ipsum</p>
        <p>© Copyright 2019 Povert. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

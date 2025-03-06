import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation ni import qiling
import MainLogo from "../../assets/logo2.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Sovrin", path: "/sovrin" },
        { name: "Savollar", path: "/savollar" },
        { name: "Bog‘lanish", path: "/boglanish" },
        { name: "Maqolalar", path: "/maqolalar" },
        { name: "Nizom", path: "/nizom" },
    ];

    return (
        <div className="absolute z-40 w-full">

            <nav className="navbar h-[60px] bg-[#1E9FD9] w-full flex justify-center items-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </nav>
            <nav className="sticky custom-container flex items-center bg-transparent  justify-between py-4">

                <a href="/">
                    <img src={MainLogo} alt="mainLogo" />
                </a>
                <ul className="hidden md:flex gap-6 text-blue-500 font-semibold text-md">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    className="md:hidden text-blue-400"
                    onClick={() => setMenuOpen(true)}
                >
                    <FiMenu size={30} />
                </button>
            </nav>

            <div
                className={`fixed top-0 right-0 h-screen w-72 bg-gray backdrop-blur-md text-white transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
                style={{ zIndex: 100 }}
            >

                <button
                    className="absolute top-4 right-4 text-white"
                    onClick={() => setMenuOpen(false)}
                >
                    <FiX size={30} />
                </button>


                <ul className="mt-16 flex flex-col space-y-6 text-lg font-semibold p-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
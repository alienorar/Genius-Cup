import { Link, useLocation } from "react-router-dom";
import BlueLogo from "../../assets/logo-blue.svg"
const Header = () => {


    const location = useLocation()

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Sovrin", path: "/sovrin" },
        { name: "Savollar", path: "/savollar" },
        { name: "Bog‘lanish", path: "/boglanish" },
        { name: "Maqolalar", path: "/maqolalar" },
        { name: "Nizom", path: "/nizom" },
    ];


    return (
        <header className="custom-container">
            <nav className="flex items-center justify-between py-[30px]">
                <Link to={"/"}>
                    <img src={BlueLogo} alt="blue logo" />
                </Link>
                <div className="flex items-center justify-between gap-[50px]">
                    <ul className="hidden md:flex gap-6 items-center text-zinc-400 text-lg font-medium poppins">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative">
                                <Link
                                    to={link.path}
                                    className={`relative px-2 py-1 transition duration-300 hover:text-black poppin  ${location.pathname === link.path ? "font-semibold text-black" : "text-zinc-500"}`}
                                >
                                    {link.name}
                                    {/* Hover Underline Effect */}
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="relative h-12 w-40 overflow-hidden border bg-gradient-to-br rounded-[30px] from-sky-400 to-purple-700 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40">
                        <a href="https://t.me/Genius_cup_bot" target="_blank" rel="noopener noreferrer" className="relative z-10">
                            Ro'yxatdan O'tish
                        </a>

                    </button>

                </div>
            </nav>
        </header>
    )
}

export default Header
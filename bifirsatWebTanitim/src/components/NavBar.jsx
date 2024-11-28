import { useState } from "react";
import { Link } from "react-scroll";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import "./NavBar.css";
import icon from "../assets/icon.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      // Menü kapanmadan önce çıkış animasyonunu başlat
      setAnimateOut(true);
      setTimeout(() => {
        setIsOpen(false);
        setAnimateOut(false); // Animasyon sınıfını temizle
      }, 300); // Çıkış animasyonunun süresiyle eşleştirin
    } else {
      setIsOpen(true);
    }
  };

  const navItems = [
    { id: 1, text: "Hakkımızda", to: "hakkimizda" },
    { id: 2, text: "Biz Kimiz?", to: "bizkimiz" },
    { id: 3, text: "Partnerimiz Olun", to: "partner" },
    { id: 4, text: "İletişim", to: "iletisim" },
    { id: 5, text: "Mobil Uygulamamız", to: "mobiluygulama" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/20 rounded-lg backdrop-blur-2xl shadow-xl flex justify-between items-center h-16 max-w-[1500px] px-8 md:px-36 mx-auto z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src={icon} className="h-10 w-10 animate-bounce-slow" alt="icon" />
        <h1 className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-300">
          BiFırsat.
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            smooth={true}
            className="text-white font-medium text-lg hover:text-yellow-900 transition duration-300 cursor-pointer"
          >
            {item.text}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="text-3xl text-gray-500">
          {isOpen ? <IoIosArrowDropleft color="#afaf87" /> : <IoIosArrowDropright color="#7f7f2b" />}
        </button>

        {/* Mobil Menü */}
        {isOpen && (
          <div
            className={`absolute top-12 -right-5 bg-[#f39c12]/85 rounded-lg backdrop-blur-lg  shadow-2xl py-4 px-6 z-50 w-56 ${animateOut ? "menu-exit" : "menu-enter"}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                smooth={true}
                className="block text-black font-medium text-lg py-2 hover:text-yellow-500 transition duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

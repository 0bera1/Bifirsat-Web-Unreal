import { useState } from "react";
import { Link } from "react-scroll";
import { IoMdRemoveCircleOutline, IoIosMenu } from "react-icons/io";
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
    { id: 5, text: "Mobil Uygulamamız", to: "mobiluygulama" },
    { id: 2, text: "Biz Kimiz?", to: "bizkimiz" },
    { id: 3, text: "Partnerimiz Olun", to: "partner" },
    { id: 4, text: "İletişim", to: "iletisim" },

  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-yellow-400/80 rounded-lg backdrop-blur-lg shadow-xl flex justify-between items-center h-20 
    max-w-full px-8 md:px-36 mx-auto z-50"
    >
      {/* Logo Section */}
      <Link
        to="top"
        smooth={true}
        className="flex items-center justify-center space-x-5 rounded-2xl py-3 bg-gray-900 :bg-[#1a1a1a]/80 px-7"
      >
        <img src={icon} className="h-10 w-10 animate-bounce-slow" alt="icon" />
        <h1
          className="text-2xl font-bold text-gray-100  transition scale-110 hover:scale-125  duration-300 relative hover:text-yellow-400 
           after:bg-yellow-600 after:absolute after:h-[0.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all 
           after:duration-500 pb-0 cursor-pointer  "
        >
          bifırsat
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-12">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            smooth={true}
            className="text-gray-800 font-medium text-lg hover:text-yellow-400 rounded-full bg-none hover:bg-[#1a1a1a]/80 hover:px-5 
             transition-all duration-500 hover:scale-110 cursor-pointer"
          >
            {item.text}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="text-3xl text-gray-500">
          {isOpen ? (
            <IoMdRemoveCircleOutline color="#1a1a1a" />
          ) : (
            <IoIosMenu color="#1a1a1a" />
          )}
        </button>

        {/* Mobil Menü */}
        {isOpen && (
          <div
            className={`absolute top-12 -right-5 bg-[#333333]/85 rounded-lg backdrop-blur-lg  shadow-2xl py-4 px-6 z-50 w-56 ${
              animateOut ? "menu-exit" : "menu-enter"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                smooth={true}
                className="block text-yellow-500 font-medium text-lg py-2 hover:text-yellow-500 transition duration-300 cursor-pointer"
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

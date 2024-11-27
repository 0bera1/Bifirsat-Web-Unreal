import { Link } from "react-router-dom"; // React Router ile yönlendirme yapılacak
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"; // Eski alışveriş torbası ikonu
import "../styles/NavBar.css";

// Menü öğeleri
const navItems = [
  { id: 1, text: "Anasayfa", to: "/" },
  { id: 6, text: "Kategoriler", to: "/elektronik" },
  { id: 2, text: "Kuponlar", to: "/kuponlar" },
  { id: 3, text: "Seyahat", to: "/seyahat" },
  { id: 7, text: "Yardım", to: "/yardim" },
  { id: 5, text: "Blog", to: "/blog" },
  { id: 4, text: "Hesabım", to: "/hesabim" },
];

function NavBar() {
  // Menülerin dropdown durumlarını tek bir state objesinde tutuyoruz
  const [openDropdown, setOpenDropdown] = useState(null);

  // Dropdown açma ve kapama işlemi
  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="bg-white/5 rounded-full backdrop-blur-lg shadow-xl flex justify-between items-center h-24 max-w-[1500px] px-10 md:px-20 mx-auto">
      {/* Logo ve Alışveriş Torbası İkonu */}
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon
          icon={faShoppingBag} // Eski alışveriş torbası ikonu
          className="text-yellow-500 text-3xl animate-bounce-slow" // Yavaşça büyüyüp küçülen animasyon
        />
        <h1 className="text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition duration-300">
          BiFırsat.
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          item.text === "Kuponlar" || item.text === "Seyahat" || item.text === "Kategoriler" || item.text === "Yardım" || item.text === "Hesabım" ? (
            // "Kuponlar", "Seyahat", "Kategoriler", "Yardım" ve "Hesabım" için dropdown menülerini oluşturuyoruz
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => handleDropdown(item.text)}
              onMouseLeave={() => handleDropdown(null)}
            >
              <button className="font-bold pr-3 m-2 cursor-pointer duration-300 hover:text-yellow-400 flex items-center transition">
                {item.text}
                {/* Dropdown Icon */}
                <svg
                  className={`w-4 h-4 ml-2 transform duration-200 ${openDropdown === item.text ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menü */}
              <div
                className={`absolute left-0 -mt-3 bg-amber-400 drop-shadow-2xl py-3 duration-500 px-2 rounded-lg shadow-2xl w-40 opacity-0 transform 
                  ${openDropdown === item.text ? "opacity-100 translate-y-2" : "-translate-y-5"}`}
                style={{
                  visibility: openDropdown === item.text ? "visible" : "hidden",
                }}
              >
                {/* Yardım Dropdown İçeriği */}
                {item.text === "Yardım" && (
                  <>
                    <Link to="/destek" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Destek
                    </Link>
                    <Link to="/sikca-sorulan-sorular" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Sıkça Sorulan Sorular
                    </Link>
                    <Link to="/bifirsata-katil" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      BiFırsat&apos;a Katıl
                    </Link>
                    <Link to="/hata-bildir" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Hata Bildir
                    </Link>
                  </>
                )}

                {/* Hesabım Dropdown İçeriği */}
                {item.text === "Hesabım" && (
                  <>
                    <Link to="/profilim" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Profilim
                    </Link>
                    <Link to="/siparislerim" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Siparişlerim
                    </Link>
                    <Link to="/favorilerim" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Favorilerim
                    </Link>
                  </>
                )}

                {/* Kuponlar Dropdown İçeriği */}
                {item.text === "Kuponlar" && (
                  <>
                    <Link to="/kuponlar" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Kuponlar
                    </Link>
                    <Link to="/firsatlar" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Fırsatlar
                    </Link>
                  </>
                )}

                {/* Seyahat Dropdown İçeriği */}
                {item.text === "Seyahat" && (
                  <>
                    <Link to="/seyahat" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Seyahat
                    </Link>
                    <Link to="/turlar" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Turlar
                    </Link>
                  </>
                )}

                {/* Kategoriler Dropdown İçeriği */}
                {item.text === "Kategoriler" && (
                  <>
                    <Link to="/elektronik" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Elektronik
                    </Link>
                    <Link to="/giyim" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Giyim
                    </Link>
                    <Link to="/ev-esyalari" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Ev Eşyaları
                    </Link>
                    <Link to="/yiyecek-icecek" className="block px-4 py-2 hover:bg-yellow-500 rounded-lg transition duration-400">
                      Yiyecek & İçecek
                    </Link>
                  </>
                )}
              </div>
            </div>
          ) : (
            // Diğer menü öğeleri için Link bileşeni kullanıyoruz
            <Link
              key={item.id}
              to={item.to}
              className="text-black font-bold pr-3 m-2 cursor-pointer duration-300 hover:text-yellow-400 transition"
            >
              {item.text}
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

export default NavBar;

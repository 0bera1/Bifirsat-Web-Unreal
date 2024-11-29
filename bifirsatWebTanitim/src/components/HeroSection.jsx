import { Link } from "react-scroll";
import icon from "../assets/icon.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const bTo = [
  { id: 1, text: "Neden BiFırsat ?", to: "nedenbifirsat" },
  { id: 2, text: "BiFırsat Nasıl Çalışır?", to: "nasilcalisir" },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["İndirim", "Kupon", "Kampanya", "Fırsatlar", "Seyahat"];
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      // Öncelikle opaklığı sıfıra düşür
      controls
        .start({
          opacity: 0,
          transition: { duration: 0.5 },
        })
        .then(() => {
          // Yeni rolü güncelle ve opaklığı tekrar artır
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          });
        });
    }, 1500); // Her 1.5 saniyede bir değişiyor

    return () => {
      clearInterval(interval);
    };
  }, [controls, roles.length]);
  return (
    <div className="flex items-center  justify-center min-h-screen">
      {/* Beyaz Alan */}
      <div
        className="bg-gray-800/90 backdrop-blur-2xl px-8 py-16 sm:px-16 md:px-24 lg:px-32 xl:px-48 
         rounded-3xl shadow-2xl flex flex-col items-center "
      >
        {/* İkon ve Başlık */}
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-x-12 sm:space-y-0">
          {/* Logo Tıklanabilir */}
          <Link
            to="top" // Sayfanın başına yönlendir
            smooth={true}
            className="cursor-pointer"
          >
            <img
              src={icon}
              className="h-40 w-36 sm:h-52 sm:w-48 md:h-60 md:w-56 lg:h-72 lg:w-64 lg:mb-2 "
              alt="icon"
            />
          </Link>

          {/* Başlık Tıklanabilir */}
          <Link
            to="top" // Sayfanın başına yönlendir
            smooth={true}
            className="cursor-pointer"
          >
            <div className="text-center sm:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white tracking-wider">
                bifırsat
              </h1>
              <h3 className="mt-4 ml-1 sm:mt-7 text-white text-xl sm:text-lg tracking-widest">
                Her Zaman BiFırsat Vardır!
              </h3>
            </div>
            <div></div>
          </Link>
        </div>

        {/* Linkler */}
        <div className="items-center justify-center sm:flex-row space-y-6 sm:space-y-0 sm:space-x-14">
          
          <div className="mx-32">
          <h3 className=" ml-1  text-white text-xl sm:text-lg tracking-widest">
            Tüm indirimler tek bir platformda !
          </h3>

          <motion.p
            className="text-xl ml-28 font-medium  text-white mb-7"
            style={{ zIndex: -1 }}
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <span className="text-yellow-500 text-2xl font-bold">
              {roles[currentIndex]}
            </span>
          </motion.p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-14">
          {bTo.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                smooth={true}
                className="relative group text-lg font-bold text-white bg-yellow-500 px-6 py-3 
                rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-500"
              >
                <span
                  className="absolute w-0 h-0 bg-yellow-400 rounded-full group-hover:w-full group-hover:h-48 
                transition-all duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2 
                top-1/2 left-1/2"
                ></span>
                <span className="relative">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

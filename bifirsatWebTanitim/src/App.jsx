import "./App.css";
import MobilUygulama from "./components/MobilUygulama";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Hakkinda from "./components/Hakkinda";
import BifirsatNasilCalisir from "./components/BifirsatNasilCalisir";
import BizKimiz from "./components/BizKimiz";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import SizeUlasalim from "./components/SizeUlasalim";
import FooterB from "./components/FooterB";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll konumunu kontrol et
  useEffect(() => {
    const handleScroll = () => {
      // Sayfanın en üst kısmında değilse butonu göster
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Scroll event'ini dinle
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="top" className="  overflow-hidden">
        <NavBar />
        <div className="mb-36 bg-[#ffbf00]">
          <HeroSection />
        </div>
        <div
          id="hakkimizda"
          className="items-center lg:mx-52  my-10 justify-center"
        >
          <Hakkinda />
          {isVisible && (
            <Link to="top" smooth={true}>
              <FaAngleDoubleUp className="text-5xl transition-all duration-500 p-2 text-yellow-500 bg-none hover:bg-yellow-500 hover:text-[#1a1a1a] rounded-full  fixed bottom-10 right-10 cursor-pointer" />
            </Link>
          )}
        </div>
        <BifirsatNasilCalisir />
        <div
          className="mt-96 mb-96 bg-transparent  lg:w-auto lg:h-auto h-[800px] w-full 
       lg:mx-32 rounded-3xl items-center justify-center px-2 lg:border-2 lg:border-black py-16 lg:bg-[#ffbf00]/90 lg:backdrop-blur-xl 
       lg:shadow-2xl "
        >
          <MobilUygulama />
        </div>
        <div className="px-40 py-40 bg-[#ffbf00]">
        <BizKimiz />
        </div>
        <SizeUlasalim />
        <FooterB/>
      </div>
    </>
  );
}

export default App;

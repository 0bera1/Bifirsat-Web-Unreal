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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="top" className="overflow-hidden">
        <NavBar />
        <div className="mb-36 bg-[#ffbf00]">
          <HeroSection />
        </div>
        <div
          id="hakkimizda"
          className="flex flex-col items-center px-4 md:px-8 lg:px-4 xl:mx-52 my-10"
        >
          <Hakkinda />
          {isVisible && (
            <Link
            style={{ zIndex: 1000 }}
            to="top" smooth={true}>
              <FaAngleDoubleUp className="text-5xl transition-all duration-500 p-2 text-yellow-500 bg-none hover:bg-yellow-500 hover:text-[#1a1a1a] rounded-full fixed bottom-10 right-10 cursor-pointer" />
            </Link>
          )}
        </div>
        <BifirsatNasilCalisir />
        <div
          className="mt-96 mb-96 bg-transparent w-full lg:w-auto h-[800px] lg:h-auto lg:mx-32 rounded-3xl items-center justify-center px-4 md:px-8 lg:px-16 lg:py-16 py-10 lg:border-2 lg:border-black lg:bg-[#ffbf00]/90 lg:backdrop-blur-xl lg:shadow-2xl"
        >
          <MobilUygulama />
        </div>
        <div className="px-4 md:px-8 lg:px-40 py-20 lg:py-40 bg-[#ffbf00]">
          <BizKimiz />
        </div>
        <SizeUlasalim />
        <FooterB />
      </div>
    </>
  );
}

export default App;
import ss1 from "../assets/app-ss/desktop-ss1.png";
import ss2 from "../assets/app-ss/desktop-ss.png";
import ss3 from "../assets/app-ss/desktop-ss2.png";
import ss4 from "../assets/app-ss/desktop-ss3.png";
import ss5 from "../assets/app-ss/desktop-ss4.png";

import ss2Mobile from "../assets/app-ss/1.jpg";
import ss3Mobile from "../assets/app-ss/2.jpg";
import ss4Mobile from "../assets/app-ss/4.jpg";
import ss5Mobile from "../assets/app-ss/5.jpg";
import ss6Mobile from "../assets/app-ss/6.jpg";
import ss7Mobile from "../assets/app-ss/7.jpg";
import ss8Mobile from "../assets/app-ss/8.jpg";
import ss9Mobile from "../assets/app-ss/9.jpg";
import ss10Mobile from "../assets/app-ss/10.jpg";
import ss11Mobile from "../assets/app-ss/11.jpg";
import ss12Mobile from "../assets/app-ss/12.jpg";

import { useState } from "react";

import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

import { RxDoubleArrowRight,RxDoubleArrowLeft  } from "react-icons/rx";


function MobilUygulama() {
  const images = [ss1, ss2, ss3, ss4, ss5]; // Desktop fotoğrafları
  const images2 = [
    ss2Mobile,
    ss3Mobile,
    ss4Mobile,
    ss5Mobile,
    ss6Mobile,
    ss7Mobile,
    ss8Mobile,
    ss9Mobile,
    ss10Mobile,
    ss11Mobile,
    ss12Mobile,
  ]; // Mobil fotoğrafları

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) %
        (window.innerWidth < 768 ? images2.length : images.length)
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex -
          1 +
          (window.innerWidth < 768 ? images2.length : images.length)) %
        (window.innerWidth < 768 ? images2.length : images.length)
    );
  };

  return (
    <div id="mobiluygulama" className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-black mb-2">
        Mobil Uygulamamız {"(Çok Yakında !)"}
      </h2>
      <h2 className="text-xl font-bold text-center text-black mb-16">
        * Görseller Temsilidir.
      </h2>
      <div className="relative">
        {/* Image Container */}
        <div className="overflow-hidden  lg:hover:scale-[1.02] transition duration-500 ease-in-out rounded-3xl w-full shadow-2xl shadow-black mx-auto">
          <div
            className={`flex transition-all duration-1000 
                ${window.innerWidth < 768 ? "space-x-9 ml-5" : ""}
                `}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {(window.innerWidth < 768 ? images2 : images).map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className={`w-full
                    ${window.innerWidth < 768
                      ? "h-[700px] object-cover rounded-[50px] mx-auto mb-4"
                      : "h-full object-contain"
                  }`}
                />
              )
            )}
          </div>
        </div>

        {/* Navigation buttons */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:scale-150
             text-white bg-[#ffbf00] p-4 lg:p-3 rounded-full opacity-75 hover:opacity-100 
             transition duration-300 ease-in-out hover:text-black"
          >
          <RxDoubleArrowLeft className="text-xl lg:text-2xl" />
          </button>
        )}

        <button
          onClick={handleNext}
          className="absolute right-4 hover:scale-150
          top-1/2 transform -translate-y-1/2 text-white bg-[#ffbf00] p-4 lg:p-3 rounded-full 
          opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
        >
          <RxDoubleArrowRight className="text-xl lg:text-2xl hover:text-black" />
        </button>
      </div>

      {/* App Store and Play Store buttons */}
      <div className="flex justify-center items-center mt-14 space-x-5 lg:space-x-10">
  <a
    href="https://apps.apple.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="border border-black hover:border-[#ffbf00] flex flex-row p-3 lg:p-6 rounded-xl transition duration-700 ease-in-out hover:bg-black group">
      <FaAppStoreIos className="lg:text-5xl text-8xl text-[black] group-hover:text-[#ffbf00] items-center justify-center" />
      <h6 className="text-[black] text-sm lg:text-lg font-bold items-center justify-center mt-4 ml-4 lg:mt-2 lg:ml-2 transition duration-700 ease-in-out group-hover:text-[#ffbf00]">
        Çok Yakında App Store&apos;da! {"(iOS)"}
      </h6>
    </div>
  </a>
  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="border border-black hover:border-black flex flex-row p-3 lg:p-6 rounded-xl transition duration-700 ease-in-out hover:bg-black group">
      <FaGooglePlay className="lg:text-5xl text-8xl text-black group-hover:text-[#ffbf00] items-center justify-center" />
      <h6 className="text-black text-sm lg:text-lg font-bold items-center justify-center mt-4 ml-4 lg:mt-2 lg:ml-2 transition duration-700 ease-in-out group-hover:text-[#ffbf00]">
        Çok Yakında Play Store&apos;da! {"(Android)"}
      </h6>
    </div>
  </a>
</div>

    </div>
  );
}

export default MobilUygulama;

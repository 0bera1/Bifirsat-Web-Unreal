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
        (prevIndex - 1 +
          (window.innerWidth < 768 ? images2.length : images.length)) %
        (window.innerWidth < 768 ? images2.length : images.length)
    );
  };

  return (
    <div id="mobiluygulama" className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Mobil Uygulamamız
      </h2>
      <div className="relative">
        {/* Image Container */}
        <div className="overflow-hidden rounded-3xl w-full mx-auto">
          <div
            className={`flex transition-all duration-1000  
                ${window.innerWidth < 768 ? "space-x-9 ml-5" : ""}
                `}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {(window.innerWidth < 768 ? images2 : images).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Screenshot ${index + 1}`}
                className={`w-full ${
                  window.innerWidth < 768
                    ? "h-[700px] object-cover rounded-[50px] mx-auto mb-4" // Mobilde daha büyük ve fotoğraflar arasındaki mesafeyi arttır
                    : "h-full object-contain"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        {window.innerWidth < 768 && currentIndex > 0 && ( // Only show Prev button on mobile when not on first image
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-4 lg:p-3 rounded-full opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
          >
            &#60;
          </button>
        )}
          {/* Navigation buttons */}
          {window.innerWidth > 768 && currentIndex > 0 && ( // Only show Prev button on mobile when not on first image
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-4 lg:p-3 rounded-full opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
          >
            &#60;
          </button>
        )}

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-4 lg:p-3 rounded-full opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
        >
          &#62;
        </button>
      </div>
    </div>
  );
}

export default MobilUygulama;

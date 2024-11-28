import { FaTags, FaShoppingBag, FaGift } from "react-icons/fa";
import "./hakkinda.css";

function Hakkinda() {
  return (
    <div className="flex items-center shadow-2xl scale-90 justify-center min-h-screen bg-gradient-to-tr rounded-3xl from-orange-300 via-orange-500 to-yellow-500">
      <div className="relative bg-white/90 hover:scale-110 transition duration-500 backdrop-blur-lg rounded-3xl shadow-2xl max-w-3xl p-10">
        {/* Çizgisel Süslemeler */}

        {/* Başlık */}
        <h1 className="text-5xl font-bold text-gray-700 text-center">
          BiFırsat Hakkında
        </h1>

        {/* İkonlar */}
        <div className="flex justify-center space-x-6 my-6">
          {/* FaShoppingBag */}
          <div className="p-4 bg-yellow-500 rounded-full shadow-lg hover:scale-110 transform transition duration-300 animate-bounce-slow-hakkinda hover:animate-spin">
            <FaShoppingBag size={40} className="text-white" />
          </div>

          {/* FaTags */}
          <div className="p-4 bg-orange-500 rounded-full shadow-lg hover:scale-110 transform transition duration-300 animate-bounce-slow-hakkinda hover:animate-wiggle">
            <FaTags size={40} className="text-white" />
          </div>

          {/* FaGift */}
          <div className="p-4 bg-black rounded-full shadow-lg hover:scale-110 transform transition duration-300 animate-bounce-slow-hakkinda hover:animate-pulse">
            <FaGift size={40} className="text-yellow-500" />
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Bifırsat yerel ve e-ticaret markaların indirimlerini ve kampanyalarını
          tek bir platformda toplayıp doğrudan hedef müşteri kitlesine
          ulaştırarak markaların pazarlama süreçlerine katkı sağlar.
        </p>
      </div>
    </div>
  );
}

export default Hakkinda;

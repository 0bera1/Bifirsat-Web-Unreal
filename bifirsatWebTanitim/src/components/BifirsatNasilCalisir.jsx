import { FaHandshake, FaRegBuilding, FaPlug } from "react-icons/fa";

function BifirsatNasilCalisir() {
  return (
    <div id="nasilcalisir" className="pt-36 pb-36 lg:px-0 px-5 bg-[#ffbf00] min-h-screen flex flex-col justify-center items-center mt-96 space-y-16">
      {/* Ana container */}
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-5xl backdrop-blur-lg hover:scale-105 transition-transform duration-700">
        {/* Başlık */}
        <h1 className="text-4xl font-semibold text-black text-center mb-8 sm:text-3xl">
          BiFırsat Nasıl Çalışır?
        </h1>
        
        {/* Açıklama */}
        <p className="text-lg text-black text-center mb-12 leading-relaxed max-w-2xl mx-auto sm:text-base">
          Bifırsat, indirim ve kampanyalarınızı tek çatı altında toplayarak hedef müşteri kitlenize hızlı ve etkili bir şekilde ulaşmanızı sağlar.
        </p>
        
        {/* İkonlar */}
        <div className="flex justify-center items-center lg:space-x-12 mt-8 sm:flex-wrap space-x-8  sm:space-y-8">
        <div className="flex flex-col items-center bg-yellow-500 mt-auto p-6 rounded-full shadow-xl transform hover:scale-110 transition duration-500">
    <FaHandshake size={50} className="text-black" />
    <p className="mt-2 text-center text-black text-sm lg:text-base">Hedef Müşterilerle Buluşma</p>
  </div>
          <div className="flex flex-col items-center bg-black p-6 rounded-full shadow-xl transform hover:scale-110 transition duration-500">
            <FaRegBuilding size={50} className="text-white" />
            <p className="mt-2 text-center text-white text-sm sm:text-base">E-Ticaret İçin API Entegrasyonu</p>
          </div>
          <div className="flex flex-col items-center bg-yellow-500 p-6 rounded-full shadow-xl transform hover:scale-110 transition duration-500">
            <FaPlug size={50} className="text-black" />
            <p className="mt-2 text-center text-black text-sm sm:text-base">Desteğimizle Sorunsuz Entegrasyon</p>
          </div>
        </div>
      </div>

      {/* Ne Yapmanız Gerekir? Bölümü */}
      <div className="bg-white p-12 rounded-3xl shadow-xl w-full max-w-5xl backdrop-blur-lg hover:scale-105 transition-transform duration-700">
        <h2 className="text-3xl font-bold text-black text-center mb-12 sm:text-2xl">
          Ne Yapmanız Gerekir?
        </h2>
        
        

          {/* E-Ticarette Olanlar İçin */}
          <div className="space-y-4">
            <p className="text-black lg:text-lg md:text-lg sm:text-base">
              E-ticaret sitenizdeki, indirimlerinizi ve kampanyalarınızı API sistemi ile  güncel olarak Bifırsat&apos;a bağlayabiliriz. Henüz API sisteminiz yoksa, manuel olarak da girebiliriz ve API oluşturma sürecinde ekibimizden danışmanlık alabilirsiniz.
            </p>
          </div>
        </div>
      </div>
  );
}

export default BifirsatNasilCalisir;

import { FaTags, FaShoppingBag, FaGift } from "react-icons/fa";
import "./hakkinda.css";

function Hakkinda() {
  return (
    <div
      className="lg:space-y-10 items-center flex-col hover:scale-105 transition-transform duration-700 
      flex pt-36 pb-36 lg:shadow-2xl justify-start min-h-screen bg-none lg:bg-gradient-to-tr rounded-3xl from-orange-300/80 via-orange-500/80 to-yellow-500/80"
    >
      <div className="relative bg-white/80 hover:scale-105 transition-transform duration-700 backdrop-blur-lg rounded-3xl shadow-2xl max-w-3xl p-10">
        {/* Başlık */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          BiFırsat Hakkında
        </h1>

        {/* İkonlar */}
        <div className="flex justify-center space-x-8 my-8">
          {/* FaShoppingBag */}
          <div className="p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl hover:scale-110 transform transition-all duration-300 animate-bounce">
            <FaShoppingBag size={40} className="text-white" />
          </div>

          {/* FaTags */}
          <div className="p-6 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-xl hover:scale-110 transform transition-all duration-300 animate-bounce">
            <FaTags size={40} className="text-white" />
          </div>

          {/* FaGift */}
          <div className="p-6 bg-gradient-to-r from-gray-800 to-black rounded-full shadow-xl hover:scale-110 transform transition-all duration-300 animate-bounce">
            <FaGift size={40} className="text-yellow-500" />
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-xl text-gray-700 text-center leading-relaxed mt-4">
          Bifırsat, yerel ve e-ticaret markalarının indirimlerini ve kampanyalarını tek bir platformda toplayarak doğrudan hedef müşteri kitlesine ulaştırarak markaların pazarlama süreçlerine katkı sağlar.
        </p>
      </div>

      <div id="nedenbifirsat"
      className="flex items-center justify-center pt-40">
        <div
          className="flex flex-col bg-white/80 items-center justify-center 
          hover:scale-105 transition-transform duration-700 backdrop-blur-lg rounded-3xl shadow-2xl max-w-7xl p-12"
        >
          {/* Başlık */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Neden BiFırsat&apos;ı Tercih Etmelisiniz?
          </h1>

          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-2/3">
              <h5 className="lg:text-xl md:text-xl sm:text-xl font-bold text-gray-700 text-center mb-6">
                E-Ticarette Olanlar İçin
              </h5>
              <ul className="text-gray-700 space-y-5 lg:text-lg md:text-lg sm:text-base">
                <li>
                  • Markanızın; indirimin ve kampanyalarını hedef müşteri kitlenizle buluşmasını sağlamak.
                </li>
                <li>
                  • Bifırsat,{" "}
                  <span className="font-bold">
                    satış olmadan sizden komisyon almaz.{" "}
                  </span>
                  Tıklanma başına ya da gösterim için hiçbir ücret ödemezsiniz. Bu sayede{" "}
                  <span className="font-bold">
                    pazarlama maliyetlerinizi düşürür.
                  </span>
                </li>
                <li>
                  • Hedef müşterilerinizin indirimlerinize ulaşıp alışveriş yaptıktan sonra sizden mutlu ayrılıp{" "}
                  <span className="font-bold">
                    marka sadakatinin artmasını sağlar.
                  </span>
                </li>
                <li>
                  • Bifırsatın indirimsever kullanıcıları ile markanızın kampanyalarını buluşturarak{" "}
                  <span className="font-bold">satışlarınızı arttırın.</span>
                </li>
                <li>
                  • Oluşturduğunuz indirim ve kampanyaların satışa dönüş oranını görerek{" "}
                  <span className="font-bold">
                    kampanya dönemi takibini
                  </span>{" "}
                  yapabilirsiniz.
                </li>
                <li>
                  • E-ticarette olan markaların indirim ve kampanyalarını tek platformda toplayıp API yönlendirmesi ile satışları kendi web siteniz üzerinden yaparak{" "}
                  <span className="font-bold">
                    web site trafiğinizin artmasını sağlamak.
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-2/3">
              <h5 className="lg:text-xl md:text-xl sm:text-xl font-bold text-gray-700 text-center mb-6">
                Yerelde Olanlar İçin
              </h5>
              <ul className="text-gray-700 space-y-5 lg:text-lg md:text-lg sm:text-base">
                <li>
                  • Markanızın İndirimin ve kampanyalarını{" "}
                  <span className="font-bold">yereldeki müşterilerle</span>{" "}
                  buluşturarak dükkanınıza{" "}
                  <span className="font-bold">
                    yeni müşteriler gelmesini sağlar.
                  </span>
                </li>
                <li>
                  • Bifırsat,{" "}
                  <span className="font-bold">
                    satış olmadan sizden komisyon almaz.{" "}
                  </span>
                  Tıklanma başına ya da gösterim için hiçbir ücret ödemezsiniz. Bu sayede pazarlama maliyetlerinizi düşürür.
                </li>
                <li>
                  • İndirimli alışveriş yapan müşteri sizden mutlu ayrılıp{" "}
                  <span className="font-bold">
                    sizin dükkanınıza devamlı müşteri olmasını sağlar.
                  </span>
                </li>
                <li>
                  • Bifırsatın indirimsever kullanıcıları ile markanızın
                  kampanyalarını buluşturarak{" "}
                  <span className="font-bold">satışlarınızı arttırın.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hakkinda;

import hamza from "../assets/hamza.jpg";
import bera from "../assets/bera.jpeg";
import esin from "../assets/esin.jpg";
import { FaLinkedin } from "react-icons/fa6";
const BizKimiz = () => {
  const calisanlar = [
    { id: 1, ad: "Hamza Aydın", unvan: "Co-Founder & COO", resim: hamza ,linkledin:"https://www.linkedin.com/in/hamza-ayd%C4%B1n-b3622520b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"},
    { id: 3, ad: "Esin Eren", unvan: "Co-Founder & CEO", resim: esin ,linkledin:"https://www.linkedin.com/in/esin-erenn"},
    { id: 2, ad: "Bera Ekimci", unvan: "Co-Founder & CTO", resim: bera ,linkledin:"https://www.linkedin.com/in/ahmed-bera-ekimci"},
  ];

  return (
    <div
      id="bizkimiz"
      className="bg-[#1a1a1a] text-gray-900 p-4 lg:p-60  text-center rounded-xl shadow-2xl"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold text-[#ffbf00] mb-6">
        Biz Kimiz?
      </h2>
      <ul className="text-base sm:text-2xl text-gray-100 mb-10 font-light">
        <li>
          Bifırsat Türkiye’nin en iyi Teknoparkı seçilen Yıldız Teknopark
          bünyesindeki ön kuluçka firmasıdır.
        </li>
        <li>
          Genç, dinamik ve hızlı büyüme hedeflerimizle sizlerle birlikte bu
          yolda ilerlemek için sabırsızlanıyoruz.
        </li>
      </ul>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-16">
        {calisanlar.map((calisan) => (
          <div
            key={calisan.id}
            className="w-full sm:w-72 p-6 border border-[#ffbf00] rounded-xl shadow-lg hover:shadow-2xl transform transition-all 
            duration-500 hover:scale-110"
          >
            <img
              src={calisan.resim}
              alt={calisan.ad}
              className="w-40 sm:w-60 h-40 sm:h-60 rounded-full mx-auto mb-4 object-cover border-4 border-[#ffbf00]"
            />
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">
              {calisan.ad} <a
              href={calisan.linkledin}
              className="text-blue-500 text-sm lg:text-base relative hover:text-yellow-400 font-extralight after:bg-yellow-600 after:absolute after:h-[0.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer"
            >
              <FaLinkedin
                size={24}
                className="inline-block mr-2 mb-2 text-blue-500]"
              />
            </a>
            </h3>
            <p className="text-base sm:text-lg text-[#ffbf00]">
              {calisan.unvan}
            </p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BizKimiz;

import hamza from '../assets/hamza.jpg';
import bera from '../assets/bera.jpeg';

const BizKimiz = () => {
  const calisanlar = [
    { id: 1, ad: 'Hamza Aydın', unvan: 'Co-Founder & COO', resim: hamza },
    { id: 3, ad: 'Esin Eren', unvan: 'Co-Founder & CEO', resim: 'https://via.placeholder.com/150' },
    { id: 2, ad: 'Bera Ekimci', unvan: 'Co-Founder & CTO', resim: bera },
  ];

  return (
    <div id="bizkimiz" className="bg-white text-gray-900 p-6 lg:p-60  text-center rounded-xl shadow-2xl">
      <h2 className="text-4xl sm:text-5xl font-semibold text-[#ffbf00] mb-6">Biz Kimiz?</h2>
      <ul className="text-base sm:text-lg text-gray-700 mb-10 font-light">
        <li>Bifırsat Türkiye’nin en iyi Teknoparkı seçilen Yıldız Teknopark bünyesindeki ön kuluçka firmasıdır.</li>
        <li>Genç, dinamik ve hızlı büyüme hedeflerimizle sizlerle birlikte bu yolda ilerlemek için sabırsızlanıyoruz.</li>
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
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{calisan.ad}</h3>
            <p className="text-base sm:text-lg text-gray-500">{calisan.unvan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BizKimiz;

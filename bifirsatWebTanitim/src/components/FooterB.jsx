import { Link } from "react-scroll";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";

function FooterB() {
  return (
    <footer id="iletisim"
    className="bg-[#1a1a1a] pt-10 text-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
          {/* Column 1: About */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Hakkımızda</h4>
            <p className="text-sm">
              Bifırsat, yerel ve e-ticaret markalarının indirimlerini ve
              kampanyalarını tek bir platformda toplayarak doğrudan hedef
              müşteri kitlesine ulaştırarak markaların pazarlama süreçlerine
              katkı sağlar.{" "}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li className="mb-2">
                <Link
                  to="hakkimizda"
                  smooth={true}
                  className="text-sm lg:text-base relative hover:text-yellow-400 font-extralight after:bg-yellow-600 after:absolute after:h-[0.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer"
                >
                  Hakkımızda
                </Link>
              </li>

              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/company/bif%C4%B1rsat/"
                  className="text-sm lg:text-base relative hover:text-yellow-400 font-extralight after:bg-yellow-600 after:absolute after:h-[0.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer"
                >
                  <FaLinkedin className="inline-block mr-2 mb-1" />
                  LinkedIn
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="https://www.instagram.com/bifirsatr/"
                  className="text-sm lg:text-base relative hover:text-yellow-400 font-extralight after:bg-yellow-600 after:absolute after:h-[0.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-1 cursor-pointer"
                >
                  <LuInstagram className="inline-block mr-2 mb-1" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">İletişim</h4>
            <ul>
              <li className="mb-2 font-bold">
                Adres:{" "}
                <span className="font-medium">
                  YTÜ Teknopark Yıldız Teknik Üniversitesi Davutpaşa Kampüsü
                  Teknoloji Geliştirme Bölgesi Esenler,İstanbul
                </span>
              </li>
              {/* <li className="mb-2">Telefon: +90 555 555 55 55</li> */}
              <li className="mb-2">
                E-posta:
                <a
                  href="mailto:bifirsatr@gmail.com"
                  className="text-sm lg:text-base relative text-yellow-500 font-extralight after:bg-yellow-600 after:absolute after:h-[0.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 pb-2 cursor-pointer"
                >
                  {" "}
                  bifirsatr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Section */}
        <div className="flex md:flex-row justify-center items-center mt-6">
          <p className="text-sm ">
            &copy; 2024 BiFırsat. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterB;

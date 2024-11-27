import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Anasayfa from "./pages/Anasayfa";
import Blog from "./pages/Blog";
import Elektronik from "./pages/Elektronik";
import Firsatlar from "./pages/Firsatlar";
import Giyim from "./pages/Giyim";
import HataBildirim from "./pages/HataBildirim";
import Kuponlar from "./pages/Kuponlar";
import Seyahat from "./pages/Seyahat";
import Yardim from "./pages/Yardim";
import YiyecekIcecek from "./pages/YiyecekIcecek";
import NavBar from "./components/NavBar";
import Destek from "./pages/Destek";
import SikcaSorulanSorular from "./pages/SikcaSorulanSorular";
import BiFirsataKatıl from "./pages/BiFirsataKatıl";
import Profilim from "./pages/Profilim";
import Siparislerim from "./pages/Siparislerim";
import Favorilerim from "./pages/Favorilerim";
import Turlar from "./pages/Turlar";
import EvEsyalari from "./pages/EvEsyalari";
import Hesabim from "./pages/Hesabim";

function App() {
  return (
    <>
      <BrowserRouter className="">
      <div>
      <NavBar />
      </div>
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/kuponlar" element={<Kuponlar />} />
            <Route path="/seyahat" element={<Seyahat />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/yardim" element={<Yardim />} />
            <Route path="/hesabim" element={<Hesabim />} />
            <Route path="/firsatlar" element={<Firsatlar />} />
            <Route path="/turlar" element={<Turlar />} />
            <Route path="/elektronik" element={<Elektronik />} />
            <Route path="/giyim" element={<Giyim />} />
            <Route path="/ev-esyalari" element={<EvEsyalari />} />
            <Route path="/yiyecek-icecek" element={<YiyecekIcecek />} />
            <Route path="/destek" element={<Destek />} />
            <Route path="/sikca-sorulan-sorular" element={<SikcaSorulanSorular />} />
            <Route path="/bifirsata-katil" element={<BiFirsataKatıl />} />
            <Route path="/hata-bildir" element={<HataBildirim />} />
            <Route path="/profilim" element={<Profilim />} />
            <Route path="/siparislerim" element={<Siparislerim />} />
            <Route path="/favorilerim" element={<Favorilerim />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

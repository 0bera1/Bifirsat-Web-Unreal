import "./App.css";
import MobilUygulama from "./components/MobilUygulama";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Hakkinda from "./components/Hakkinda";

function App() {
  return (
    <>
      <div className="  overflow-hidden">
        <NavBar />
        <div className="mb-36">
        <HeroSection />
        </div>
        
        <div id="hakkimizda" className="items-center mx-52 my-10 justify-center">
        <Hakkinda />
        </div>


        <div
          className="mt-96 mb-96 bg-transparent  lg:w-auto lg:h-auto h-[800px] w-full 
      flex lg:mx-32 rounded-3xl items-center justify-center px-2  "
        >
          <MobilUygulama />
        </div>
      </div>
    </>
  );
}

export default App;

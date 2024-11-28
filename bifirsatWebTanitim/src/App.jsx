
import './App.css'
import MobilUygulama from './components/MobilUygulama'
import NavBar from './components/NavBar'
import icon from "./assets/icon.png";

function App() {

  return (
    <>
      <div className=' overflow-hidden'>
        <NavBar />

        <div>
          <div className=' h-[800px] w-full flex items-center justify-center '>
            <div className=' items-center  space-x-5 bg-white/15 backdrop-blur-xl mx-auto justify-center p-40 rounded-3xl
            shadow-2xl z-10'>
              <div className='flex-row flex items-center justify-center'>
                <img src={icon} className="h-40 w-40 mb-9" alt="icon" />
                <h1 className='text-white text-6xl  font-bold font-sans '>BiFırsat</h1>
              </div>
              <h3 style={{letterSpacing: '3.5px'}}
              className='text-center -mt-9'>Her Zaman BiFırsat Vardır!</h3>

            </div>

          </div>
        </div>
        <div className='mt-96 mb-96 bg-transparent  lg:w-auto lg:h-auto h-[800px] w-full 
      flex lg:mx-32 rounded-3xl items-center justify-center px-2  '>
          <MobilUygulama />

        </div>
      </div>
    </>
  )
}

export default App

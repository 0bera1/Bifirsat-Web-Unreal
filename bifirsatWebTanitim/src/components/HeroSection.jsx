import icon from "../assets/icon.png";

function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white/75 backdrop-blur-2xl px-16 py-10 rounded-full scale-105 shadow-lg flex items-center space-x-8 hover:scale-125 transform transition duration-700">
        <img
          src={icon}
          className="h-28 w-28 animate-bounce"
          alt="icon"
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-wider"
          >BiFırsat</h1>
          <h3 className="mt-2 text-gray-600 text-base tracking-widest">
            Her Zaman BiFırsat Vardır!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

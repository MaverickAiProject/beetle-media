export default function HeroSection() {
  return (
    <section className="relative bg-black text-center text-white pt-32 px-6 overflow-hidden">
      {/* Radial red background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Company name */}
        <p className="text-[#ff4d4d] tracking-widest text-sm mb-4 uppercase font-semibold">
          Beetle Media
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Launch Your Own OTT Platform<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3333] to-[#ff6666]">
            Fast, Powerful, Scalable.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you’re a filmmaker, content creator, or business visionary — 
          we’ll help you build, host, and grow your OTT platform globally.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-row max-[450px]:flex-col items-center">
          <button className="bg-[#ff3333] hover:bg-[#e60000] max-[450px]:max-w-[200px] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md shadow-red-900/30">
          <a href="#contact">
            Get a Demo
          </a>
          </button>
          <button className="bg-transparent border border-[#ff3333] text-[#ff3333] font-semibold py-3 px-8 rounded-lg hover:bg-[#ff3333] hover:text-white transition duration-300">
          <a href="#services">
            Explore Services
            </a>
          </button>
        </div>
      </div>
      
    </section>
  );
}

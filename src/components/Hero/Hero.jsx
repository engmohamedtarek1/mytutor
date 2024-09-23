import { FaPlay } from "react-icons/fa";
import hero1 from "../../assets/hero1.png";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row px-5 py-6 lg:mt-32 lg:px-48 md:pb-20">
      {/* Text Section */}
      <div className="space-y-8 text-center md:max-w-[400px] md:text-left">
        <h1 className="font-bold uppercase text-[#EA580C]">
          100% satisvaction guarantee
        </h1>
        <p className="text-6xl font-semibold capitalize md:text-6xl md:font-bold">
          Find your perfect <span className="text-[#FFCF3A]">tutor</span>
        </p>
        <p>
          We help you find perfect tutor for 1-on-1 lessons. It is completely
          free and private
        </p>
        <div className="flex items-center gap-4 md:gap-8 font-bold justify-center">
          <button className="rounded-full bg-[#FFCF3A] px-6 py-2">
            Get Started
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full py-1">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0063FF]/20 text-[#0063FF]">
              <FaPlay />
            </span>
            See how it works
          </button>
        </div>
      </div>
      {/* Img Section */}
      <div className="mt-4 md:-mt-12 md:w-[550px]">
        <img src={hero1} alt="Hero Img" />
      </div>
    </div>
  );
};

export default Hero;

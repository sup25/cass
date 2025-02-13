import React from "react";

import StatItem from "./components/statItem";
import Navbar from "@/app/components/navbar";

const HomePage: React.FC = () => {
  return (
    <div className="section relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/land.mp4" type="video/mp4" />
      </video>

      {/* Overlay to Improve Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content on top of the video */}
      <div className="container relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex flex-col items-center justify-end pb-20 pt-10 flex-1">
          <div className="flex flex-col items-center">
            <div className="inline-block mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full w-fit">
              <p className="text-base text-white font-semibold">
                Transforming Waste into Value
              </p>
            </div>
            <h1 className="text-5xl text-center md:text-6xl lg:text-7xl font-bold text-white mb-10  leading-tight w-full">
              Leading the Future of Recycling.
            </h1>
          </div>

          <div className="flex md:flex-row flex-col items-end justify-end gap-4 pt-10 md:pt-28 w-full">
            <StatItem value={50000} label="Tonnes Recycled" />
            <div className="hidden sm:block h-16 w-px bg-white/20"></div>
            <StatItem value={10} label="Global Partners" />
            <div className="hidden sm:block h-16 w-px bg-white/20"></div>
            <StatItem value={70} label="Recovery Rate" isPercentage={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

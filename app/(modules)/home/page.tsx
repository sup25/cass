import React from "react";

import StatItem from "./components/statItem";

const HomePage: React.FC = () => {
  return (
    <div className="section relative min-h-screen">
      <div className="container">
        <div className="absolute inset-0 bg-[url('/landing.jpg')] bg-cover md:bgfix bg-center md:bg-top  bg-scroll bg-no-repeat ">
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex min-h-screen items-center justify-center py-20">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-block mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
                  <p className="text-base text-white font-semibold">
                    Transforming Waste into Value
                  </p>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Leading the Future of{" "}
                  <span className="text-teal-500">
                    Plastic & Tyre Recycling
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                  Innovative, Sustainable, and Profitable Solutions for a
                  Circular Economy
                </p>

                <div className="flex md:flex-row flex-col md:items-end items-center justify-end  gap-4 ">
                  <StatItem value={50000} label="Tonnes Recycled" />
                  <div className="hidden sm:block h-16 w-px bg-white/20" />
                  <StatItem value={100} label="Global Partners" />
                  <div className="hidden sm:block h-16 w-px bg-white/20" />
                  <StatItem value={95} label="Recovery Rate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

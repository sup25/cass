import React from "react";
import Image from "next/image";
import { AlertTriangle, Recycle, TimerOff, Trash2 } from "lucide-react";

const data = [
  {
    icon: Trash2,
    color: "text-teal-600",
    title: "Annual Plastic Waste",
    value: "400Mt",
    description: ["Generated annually", "Expected to double in next 15 years"],
  },
  {
    icon: Recycle,
    color: "text-[#6CB4EE]",
    title: "Recycling Rate",
    value: "9%",
    description: ["Of plastic waste is recycled", "91% remains unrecycled"],
  },
  {
    icon: TimerOff,
    color: "text-teal-600",
    title: "Tire Waste",
    value: "1B",
    description: ["End-of-life tires annually"],
  },
  {
    icon: AlertTriangle,
    color: "text-[#6CB4EE]",
    title: "Total Waste Impact",
    value: "8B Tons",
    description: ["Of plastic waste in landfills and oceans"],
  },
];

const Problems = () => {
  return (
    <section className="w-full section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <Image
              src="/waste.jpg"
              width={500}
              height={500}
              alt="Environmental Impact Visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <p className="text-2xl font-semibold text-gray-900 pb-10  leading-relaxed">
              Plastic and tire waste are suffocating our planet, piling up
              faster than we can imagine, threatening ecosystems and future
              generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className={item.color} size={20} />
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h2>
                  </div>
                  <div className="ml-8 space-y-1">
                    <p className={`text-2xl font-bold ${item.color}`}>
                      {item.value}
                    </p>
                    {item.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-gray-600 text-sm leading-tight"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;

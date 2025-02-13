"use client";
import React from "react";
import Image from "next/image";
import { Zap, BarChart, Cloud } from "lucide-react";

const data = [
  {
    icon: Zap,
    color: "text-teal-600",
    title: "1600 kW Modular Reactors",
    description: ["Our 1600 kW reactors deliver exceptional energy output."],
  },
  {
    icon: BarChart,
    color: "text-[#6CB4EE]",
    title: "Up to 70% Oil Recovery",
    description: [
      "Achieve up to 70% oil output with our advanced processing technology.",
    ],
  },
  {
    icon: Cloud,
    color: "text-teal-600",
    title: "80% reduction in carbon footprint",
    description: [
      "cassandra reactors acheive upto 80% reduction in carbon emissions as compared to other.",
    ],
  },
];

const Solutions = () => {
  return (
    <section className="section w-full md:pb-20 pb-10 relative ">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          {/* Left side - Stats */}
          <div className="md:w-1/2 flex flex-col space-y-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-lg ${item.color} bg-opacity-10`}>
                    <item.icon className={`${item.color}`} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <div className="ml-14">
                  {item.description.map((desc, i) => (
                    <p key={i} className="text-gray-600">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}

          <div className="md:w-1/2 w-full">
            <Image
              src="/reactors.png"
              width={500}
              height={500}
              alt="Environmental Impact Visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

import React from "react";
import { Recycle, Leaf, Factory, BarChart } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Recycle className="w-12 h-12 mb-4 text-teal-600" />,
      title: "Circular Economy",
      description:
        "Our patent-protected technology breaks down hydrocarbon-based waste into olefin components, creating new products like plastics, tires, and fuel.",
    },
    {
      icon: <Leaf className="w-12 h-12 mb-4 text-[#6CB4EE]" />,
      title: "Environmental Impact",
      description:
        "By transforming waste into valuable resources, we eliminate the need for crude oil in plastic production and significantly reduce carbon emissions.",
    },
    {
      icon: <Factory className="w-12 h-12 mb-4 text-teal-600" />,
      title: "Versatile Technology",
      description:
        "One machine handles multiple waste streams including tires, plastics, and oil-contaminated soil, offering an adaptable solution for various industries.",
    },
    {
      icon: <BarChart className="w-12 h-12 mb-4 text-[#6CB4EE]" />,
      title: "Certified Impact",
      description:
        "Our process is certified for carbon credits, achieving a minimum 80% reduction in carbon emissions during the creation of new hydrocarbon-based products.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Mission Statement */}
      <div className="bg-teal-600">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-archivo uppercase">
              About Us
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              At Cassandra, we&apos;re committed to creating a sustainable
              future by transforming waste into valuable resources. Our
              innovative technology not only addresses the global waste crisis
              but also significantly reduces carbon emissions in the process.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 sm:text-5xl font-archivo uppercase">
              Waste management for a circular economy 
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming environmental challenges into sustainable solutions
              through innovative technology and circular economy principles.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

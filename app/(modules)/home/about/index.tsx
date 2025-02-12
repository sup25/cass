import React from "react";
import { Recycle, Leaf, Factory, BarChart } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { value: "400M", label: "Tons of plastic waste generated yearly" },
    { value: "1B", label: "End-of-life tires annually" },
    { value: "80%", label: "Reduction in carbon emissions" },
    { value: "80%", label: "Recycling efficiency" },
  ];

  const features = [
    {
      icon: <Recycle className="w-12 h-12 mb-4 text-teal-600" />,
      title: "Circular Economy",
      description:
        "Our patent-protected technology breaks down hydrocarbon-based waste into olefin components, creating new products like plastics, tires, and fuel.",
    },
    {
      icon: <Leaf className="w-12 h-12 mb-4 text-teal-600" />,
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
      icon: <BarChart className="w-12 h-12 mb-4 text-teal-600" />,
      title: "Certified Impact",
      description:
        "Our process is certified for carbon credits, achieving a minimum 80% reduction in carbon emissions during the creation of new hydrocarbon-based products.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Revolutionizing Waste Management
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming environmental challenges into sustainable solutions
              through innovative technology and circular economy principles.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="text-3xl font-bold text-teal-600">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            At Cassandra, we&apos;re committed to creating a sustainable future
            by transforming waste into valuable resources. Our innovative
            technology not only addresses the global waste crisis but also
            significantly reduces carbon emissions in the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";

const certifications = [
  {
    image: "/iscc.svg",
    alt: "International Sustainability and Carbon Certification",
    width: 300,
    height: 200,
  },
  {
    image: "/echa.svg",
    alt: "European Chemicals Agency",
    width: 300,
    height: 200,
  },
  {
    image: "/reach.png",
    alt: "REACH Certification",
    width: 300,
    height: 200,
  },
];
const Certification = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="md:pt-20 pt-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="md:text-5xl text-4xl font-archivo uppercase font-bold text-gray-900">
                Our Certifications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              {certifications.map((cert, index) => (
                <div key={index} className=" max-w-sm">
                  <img
                    src={cert.image}
                    width={cert.width}
                    height={cert.height}
                    alt={cert.alt}
                    className=" object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;

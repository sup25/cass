import React from "react";
interface Ifacts {
  preheading?: string;
  heading?: string;
}

const TextBox = ({ heading, preheading }: Ifacts) => {
  return (
    <div className="section">
      <div className="container">
        <div className="md:py-20 py-10 flex flex-col w-full items-center justify-center">
          <p className="md:text-2xl text-base mb-10 uppercase font-semibold text-center text-teal-600">
            {preheading}
          </p>
          <h2 className="md:text-5xl max-w-screen-lg text-3xl font-bold font-archivo uppercase text-center text-black">
            {heading}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TextBox;

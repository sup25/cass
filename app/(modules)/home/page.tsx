import React from "react";
import { BsArrowRight, BsPlayCircle } from "react-icons/bs";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

interface IStatItemProps {
  value: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const StatItem: React.FC<IStatItemProps> = ({ value, label }) => (
  <div className="text-white text-center">
    <div className="text-4xl font-bold mb-2">{value}</div>
    <div className="text-sm font-medium uppercase tracking-wide">{label}</div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="section relative min-h-screen">
      <div className="container">
        <div className="absolute inset-0 bg-[url('/landing.jpg')] bg-cover md:bgfix  bg-scroll bg-no-repeat ">
          <div className="absolute inset-0 bg-black/20" />
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
                  <span className="text-teal-600">
                    Plastic & Tyre Recycling
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                  Innovative, Sustainable, and Profitable Solutions for a
                  Circular Economy
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Button className="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-500 shadow-xl hover:-translate-y-1">
                    Get Started
                    <BsArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl hover:-translate-y-1">
                    <BsPlayCircle className="mr-3 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
                  <StatItem value="50K+" label="Tonnes Recycled" />
                  <div className="hidden sm:block h-16 w-px bg-white/20" />
                  <StatItem value="100+" label="Global Partners" />
                  <div className="hidden sm:block h-16 w-px bg-white/20" />
                  <StatItem value="95%" label="Recovery Rate" />
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

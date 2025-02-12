"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Slider = () => {
  const slides = [
    { id: 1, src: "/slide1.png", alt: "Slide 1" },
    { id: 2, src: "/slide2.jpg", alt: "Slide 2" },
    { id: 3, src: "/slide1.png", alt: "Slide 3" },
    { id: 4, src: "/slide3.png", alt: "Slide 4" },
  ];

  return (
    <section className="w-full pt-5 pb-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="relative h-64">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={800}
                    height={200}
                    className="object-cover rounded-lg"
                    priority={slide.id === 1}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev-button absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none">
            <BiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button className="custom-next-button absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none">
            <BiChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;

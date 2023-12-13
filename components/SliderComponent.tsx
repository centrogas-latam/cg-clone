//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Card() {
  const slides = [
    {
      desktopImageUrl: "/Venta.jpg",
      mobileImageUrl: "/vistaMovil.jpg",
    },
    {
      desktopImageUrl: "/Vista.jpg",
      mobileImageUrl: "/vistaMovil.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="cursor-pointer max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative group"
    >
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].desktopImageUrl})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 hidden md:block"
      ></div>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].mobileImageUrl})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 md:hidden"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={`${
                slideIndex === currentIndex ? " text-blue-300" : "text-gray-500"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

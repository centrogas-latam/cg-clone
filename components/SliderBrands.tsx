"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderBrands() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,

    //Responsive
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:w-3/4  m-auto px-1 overflow-hidden ">
      <div>
        <h1 className="text-xl font-semibold p-10 text-[#2245e3] ">
          Nuestros Aliados
        </h1>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.titulo}
              className="bg-white h-[160px] cursor-pointer hover:grayscale transition-all duration-200   text-black rounded-xl shadow-xl overflow-hidden"
            >
              <div className="h-full flex flex-col justify-between">
                <div className="h-40 rounded-t-xl flex justify-center items-center">
                  <img
                    src={d.img}
                    alt=""
                    className="h-12 hover:grayscale transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-3">
                  <p className="text-sm md:text-sm font-semibold">{d.titulo}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    titulo: "Cosmoplas",
    img: "brands/cropped-cosmoplas-logo-2-1.jpg",
  },
  {
    titulo: "Anwo",
    img: "brands/ucarecdn.png",
  },
  {
    titulo: "Hical",
    img: "brands/Hical-naranjo-rocko@3x (1).webp",
  },
  {
    titulo: "Benergy",
    img: "brands/benergy.png",
  },
  {
    titulo: "Koslan",
    img: "brands/KOSLAN_POSITIVO_HOR_PANTONE 300C_SLOGAN-01.png",
  },
  {
    titulo: "Splendid",
    img: "brands/SplendidLoUpdatedhead.png",
  },
];

export default SliderBrands;

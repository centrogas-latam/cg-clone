"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto">
      <div>
        <h1 className="text-xl font-semibold p-10 text-[#2245e3] ">
          Servicios
        </h1>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.titulo}
              className=" bg-slate-100 h-[450px] text-black rounded-xl"
            >
              <div className="h-56 rounded-t-xl bg-black flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.titulo}</p>
                <p className="text-center">{d.descripcion}</p>
                <button className="bg-[#2245e3] text-white text-lg px-6 py-1 rounded-xl">
                  Ver mas
                </button>
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
    titulo: "Servicios",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Servicios",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Servicios",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Servicios",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Servicios",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Servicios",
    img: "/coming.jpg",
    descripcion: "....",
  },
];

export default Carousel;

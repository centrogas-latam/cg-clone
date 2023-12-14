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
    autoplaySpeed: 3000,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:w-3/4  m-auto px-1 overflow-hidden">
      <div>
        <h1 className="text-xl font-semibold p-10 text-[#2245e3] ">
          Productos Hogar
        </h1>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.titulo}
              className="bg-white h-[300px] text-black rounded-xl shadow-xl overflow-hidden"
            >
              <div className="h-full flex flex-col justify-between">
                <div className="h-40 rounded-t-xl flex justify-center items-center">
                  <img src={d.img} alt="" className="h-32 w-32 " />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-3">
                  <p className="text-sm md:text-lg font-semibold">{d.titulo}</p>
                  <p className="text-sm font-semibold text-[#00AD10] text-center ">
                    {d.descripcion}
                  </p>
                  <a
                    href="https://wa.me/+56949094922"
                    className="bg-[#2245e3] hover:bg-[#00AD10] text-white text-sm px-4 py-2 rounded-xl"
                  >
                    Cotizar
                  </a>
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
    titulo: "CLIMATIZADOR SPLIT MURO INVERTER WIFI 12.000 BTUH KHONE",
    img: "/climatizador khone.avif",
    descripcion: "$336.500",
  },
  {
    titulo: "Climatizador Aire acondicionado Split 12000BTU Inverter Splendid",
    img: "/splendidInverter.avif",
    descripcion: "$322.000",
  },
  {
    titulo: "EAA 12000 BTUH MURO VIRUS PROTECT INVERTER B/CALOR R410A",
    img: "/anwoInverter.webp",
    descripcion: "$581.500",
  },
  {
    titulo: "EAA. FRIO/CALOR 18.000 BTUH R410A EFICIENCIA CLASE A",
    img: "/GES9-12-18-24ECO-N-1 (1).webp",
    descripcion: "$479.700",
  },
  {
    titulo: "EAA. FRIO/CALOR 9.000 BTUH R410A INVERTER CLASE A",
    img: "/muro-inverter.webp",
    descripcion: "$423.800",
  },
  {
    titulo: "EAA. MURO FRIO/CALOR 9.000 BTUH R410A INVERTER APHRO",
    img: "/GES9-12-18-24ECO-INV-N-1.avif",
    descripcion: "$472.700",
  },
];

export default Carousel;

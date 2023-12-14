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

function Carousel1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className="md:w-3/4 w-4/4 px-1 m-auto ">
      <div>
        <h1 className="text-xl font-semibold p-10 text-[#2245e3] ">
          Categorías Destacadas
        </h1>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.titulo}
              className="bg-[#2245e3] transition duration-500 ease-in-out hover:shadow-2xl h-[300px] text-white rounded-xl cursor-pointer hover:bg-[#00AD10] shadow-xl overflow-hidden"
            >
              <div className="h-full flex flex-col space-between">
                <div className="h-40 rounded-t-xl  flex justify-center items-center">
                  <img
                    src={d.img}
                    alt=""
                    className="h-full w-full px-1 py-1 rounded-t-xl"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-3">
                  <p className="text-sm md:text-lg font-semibold">{d.titulo}</p>
                  <p className="text-sm text-center">{d.descripcion}</p>
                  {/* <button className="bg-[#2245e3] hover:bg-[#00AD10] text-white text-sm px-4 py-2 rounded-xl">
                    Cotizar
                  </button> */}
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
    titulo: "Aires acondicionados",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Instalación",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Reparación",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Categoria",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Categoria",
    img: "/coming.jpg",
    descripcion: "....",
  },
  {
    titulo: "Categoria",
    img: "/coming.jpg",
    descripcion: "....",
  },
];

export default Carousel1;

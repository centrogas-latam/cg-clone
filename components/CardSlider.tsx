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
    <div className="md:w-3/4 w-4/4 px-1 m-auto overflow-hidden mb-10">
      <div>
        <h1 className="text-xl font-semibold p-10 text-[#2245e3] ">
          Categorías Destacadas
        </h1>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.titulo}
              className="bg-[#2245e3] transition duration-500 ease-in-out hover:shadow-2xl h-[300px] text-white rounded-xl cursor-pointer hover:bg-[#00AD10] shadow-xl"
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
                  <a
                    href="https://hical.cl/"
                    className="bg-[#2245e3] hover:bg-[white] hover:text-[black] text-white text-sm px-4 py-2 rounded-xl"
                  >
                    Ver mas
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
    titulo: "Aires acondicionados",
    img: "https://vjheesgjtnxlkkbwwapy.supabase.co/storage/v1/object/sign/IMG/aire.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJTUcvYWlyZS5qcGciLCJpYXQiOjE3MDMyNjE2MjYsImV4cCI6MTczNDc5NzYyNn0.MFW1oQeffWf5vnM6y5OAoEQMMCpyiqWbDXzV7Shfrz8&t=2023-12-22T16%3A13%3A48.444Z",
    descripcion: "",
  },
  {
    titulo: "Instalación",
    img: "https://vjheesgjtnxlkkbwwapy.supabase.co/storage/v1/object/sign/IMG/instalacion.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJTUcvaW5zdGFsYWNpb24uanBnIiwiaWF0IjoxNzAzMjYxNjU5LCJleHAiOjE3MzQ3OTc2NTl9.83mjjwZLd_KqfsOmft8ATbxcrRHsbD6OZMOA2Hr_CXQ&t=2023-12-22T16%3A14%3A21.239Z",
    descripcion: "",
  },
  {
    titulo: "Reparación",
    img: "https://vjheesgjtnxlkkbwwapy.supabase.co/storage/v1/object/sign/IMG/reparacion.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJTUcvcmVwYXJhY2lvbi5qcGciLCJpYXQiOjE3MDMyNjE3NzMsImV4cCI6MTczNDc5Nzc3M30.IQm3K84qBFpE8yGQnp2NEmFUn6kWOj7kUVvMqk5BhQM&t=2023-12-22T16%3A16%3A15.494Z",
    descripcion: "",
  },
  {
    titulo: "Mantención",
    img: "https://vjheesgjtnxlkkbwwapy.supabase.co/storage/v1/object/sign/IMG/mantencion.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJTUcvbWFudGVuY2lvbi5qcGciLCJpYXQiOjE3MDMyNjE2NzUsImV4cCI6MTczNDc5NzY3NX0.lXpaaThTuxD863F5OB-np51CniM1JT-_a1akatylji8&t=2023-12-22T16%3A14%3A37.825Z",
    descripcion: "",
  },
  {
    titulo: "Calefacción",
    img: "https://vjheesgjtnxlkkbwwapy.supabase.co/storage/v1/object/sign/IMG/calefaccion.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJTUcvY2FsZWZhY2Npb24uanBnIiwiaWF0IjoxNzAzMjYxNjQ0LCJleHAiOjE3MzQ3OTc2NDR9.BnAPXiCOEMAygA8GSrR8Sm4zDjM04Tc7GCWLcF7Verw&t=2023-12-22T16%3A14%3A06.469Z",
    descripcion: "",
  },
  {
    titulo: "Encuentra mucho mas aqui",
    img: "https://vjheesgjtnxlkkbwwapy.supabase.co/storage/v1/object/sign/IMG/reparacion.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJTUcvcmVwYXJhY2lvbi5qcGciLCJpYXQiOjE3MDMyNjE3NzMsImV4cCI6MTczNDc5Nzc3M30.IQm3K84qBFpE8yGQnp2NEmFUn6kWOj7kUVvMqk5BhQM&t=2023-12-22T16%3A16%3A15.494Z",
    descripcion: "",
  },
];

export default Carousel1;

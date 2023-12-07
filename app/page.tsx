import ButtonSubmmit from "@/components/ButtonSubmmit";
import { Button } from "@/components/ui/button";
import { Award, Cpu, Instagram, PhoneCall, Wrench } from "lucide-react";
import Image from "next/image";
import { formSubmit } from "./action";

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-4 md:px-36">
        <div className="flex flex-col md:flex-row mt-8 md:mt-36">
          <div className="pr-0 md:pr-16">
            <h1 className="text-2xl md:text-5xl font-semibold">
              <span className="text-[#00ad10]">Especialistas</span> en manteción
              a <span className="text-[#2245e3]">comunidades</span>
            </h1>
            <p className="my-4 md:my-10">
              ¡Bienvenidos a CentroGas, tu aliado confiable en el mundo de la
              eficiencia energética y el mantenimiento de edificios! En un
              panorama donde la calidad y el rendimiento son fundamentales, nos
              enorgullece presentarnos como líderes en el cuidado integral de tu
              comunidad.
            </p>
            <div className="flex gap-2 mb-7">
              <Button className="bg-[#2245e3]">Descargar Brochure</Button>
              <Button className="border-[#00ad10]" variant="outline">
                Contratar
              </Button>
            </div>
          </div>
          <Image
            src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/sonriente-joven-mujer-profesional-tomando-cafe-su-jornada-laboral-completa-ella-sostiene-vaso-papel-al-aire-libre-cerca-edificio-comercial-mientras-relaja-disfruta-su-bebida.jpg"
            alt="Mujer"
            width={500}
            height={100}
          />
        </div>

        <div id="quienes-somos" className="my-8 md:my-44">
          <h1 className="text-xl md:text-3xl font-semibold flex gap-1 w-full justify-center mb-4 md:mb-8">
            Quienes <span className="text-[#2245e3]">somos</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            <span className="text-[#2245e3]">centro</span>
            <span className="text-[#00ad10]">gas</span>
          </h2>
          <div className="flex flex-col md:flex-row">
            <div>
              <p className="pr-4 md:pr-8 mb-4">
                En CentroGas, nos especializamos en la mantención de edificios,
                brindando soluciones completas para garantizar el óptimo
                funcionamiento de cada componente crucial. Desde salas de
                calderas hasta salas de bombas, pasando por grupos electrógenos
                y paneles solares, abordamos cada detalle con experiencia y
                dedicación.
              </p>
              <div className="flex flex-col md:flex-row pr-4 md:pr-8 text-justify gap-8 mt-6 md:mt-12">
                <div className="w-full md:w-1/2">
                  <h2 className="text-lg md:text-xl font-medium text-[#2245e3] mb-2">
                    ¿Quiénes somos?
                  </h2>
                  <p>
                    Somos una empresa de servicios especializada en la
                    mantención y reparación de tu edificio... Nuestro compromiso
                    va más allá de la simple prestación de servicios; nos
                    esforzamos por ser socios estratégicos de nuestros clientes,
                    asegurando que sus instalaciones operen de manera eficiente,
                    segura y sostenible. Con un equipo de profesionales
                    altamente capacitados y una visión orientada hacia el
                    futuro, en CentroGas estamos listos para superar tus
                    expectativas.
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-lg md:text-xl font-medium text-[#00ad10] mb-2">
                    ¿Porqué elegirnos?
                  </h2>
                  <ul className="list-disc ml-5 mb-4">
                    <li>
                      Contamos con un equipo profesional y especialista
                      certificado ante la Superintendencia de Electricidad y
                      Combustibles.
                    </li>
                    <li>
                      Aplicamos los más exigentes estándares de calidad en
                      nuestros servicios.
                    </li>
                    <li>
                      Utilizamos tecnología de vanguardia en todos nuestros
                      procedimientos.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Image
              src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/reflejo-hombres-negocios.jpg"
              alt="Hombres de negocios"
              width={500}
              height={100}
            />
          </div>
        </div>

        <div id="soluciones">
          <h1 className="text-3xl font-semibold flex gap-1 w-full justify-center mb-24">
            Nuestras <span className="text-[#00ad10]">soluciones</span>
          </h1>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-4 md:gap-36">
              <div className="self-center">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Salas térmicas
                </h1>
                <p className="text-justify my-4">
                  Nos especializamos en el mantenimiento de salas de calderas,
                  asegurando un rendimiento óptimo y la máxima eficiencia
                  energética. Nuestros servicios abarcan la inspección, limpieza
                  y ajuste de calderas, así como la reparación de posibles
                  fallas. Trabajamos para garantizar un ambiente seguro y
                  cumplir con los estándares de calidad.
                </p>
                <Button className="bg-[#2245e3]">Cotizar</Button>
              </div>
              <Image
                src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/IMG_8061.jpg"
                width={500}
                height={100}
                alt="Sala termica"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-36 mt-8 md:mt-24">
              <Image
                src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/IMG_7486%20(1).jpg"
                width={500}
                height={100}
                alt="Sala termica"
              />
              <div className="self-center">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Sala de bombas
                </h1>
                <p className="text-justify my-4">
                  Proporcionamos servicios de mantenimiento para salas de
                  bombas, asegurando un flujo constante y eficiente de agua.
                  Nuestro equipo se encarga de la inspección, reparación y
                  optimización de sistemas de bombeo para garantizar su
                  rendimiento óptimo, contribuyendo así a la eficiencia
                  operativa y ahorro de energía.
                </p>
                <Button className="bg-[#00ad10]">Cotizar</Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-36 mt-8 md:mt-24">
              <div className="self-center">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Grupo electrógeno
                </h1>
                <p className="text-justify my-4">
                  Nos ocupamos del mantenimiento preventivo y correctivo de
                  grupos electrógenos, asegurando la disponibilidad de energía
                  de respaldo en todo momento. Realizamos pruebas periódicas,
                  mantenimiento de motores, y nos aseguramos de que el sistema
                  esté listo para entrar en acción en caso de cortes de energía,
                  brindando tranquilidad a nuestros clientes.
                </p>
                <Button className="bg-[#2245e3]">Cotizar</Button>
              </div>
              <Image
                src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/generador-electrico-diferencias.webp"
                width={500}
                height={100}
                alt="Sala termica"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-36 mt-8 md:mt-24">
              <Image
                src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/granja-alimentada-sol-genera-electricidad-sostenible-naturaleza-generada-ia.jpg"
                width={500}
                height={100}
                alt="Sala termica"
              />
              <div className="self-center">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Paneles Solares
                </h1>
                <p className="text-justify my-4">
                  Ofrecemos servicios especializados en el mantenimiento de
                  sistemas de paneles solares para garantizar su máximo
                  rendimiento y eficiencia. Realizamos inspecciones, limpieza y
                  reparación de paneles solares, asegurando que la instalación
                  genere la energía esperada y contribuya a la sostenibilidad
                  ambiental de manera óptima.
                </p>
                <Button className="bg-[#00ad10]">Cotizar</Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-36 mt-8 md:mt-24">
              <div className="self-center">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Aguas Servidas
                </h1>
                <p className="text-justify my-4">
                  Nos encargamos de la reparación de posibles averías y la
                  implementación de medidas preventivas para asegurar el
                  funcionamiento continuo y eficiente de las redes de aguas
                  servidas. Esto incluye la reparación de tuberías dañadas,
                  reemplazo de componentes desgastados y la aplicación de
                  recubrimientos protectores.
                </p>
                <Button className="bg-[#2245e3]">Leer más</Button>
              </div>
              <Image
                src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/trabajador-ponerse-guantes-protectores.jpg"
                width={500}
                height={100}
                alt="Sala termica"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-40 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <Image
              src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/hombre-dando-presentacion-grafico-barras-lapiz-digital-alta-tecnologia.jpg"
              width={550}
              height={200}
              alt="Hombre gráfico"
            />
          </div>
          <div className="w-full md:w-2/3 ml-0 md:ml-8">
            <h1 className="text-xl md:text-2xl font-semibold py-10 text-[#2245e3] mb-3">
              Beneficios Clave
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tarjeta 1: Experiencia y Profesionalismo */}
              <div className="p-4 border rounded-lg text-center">
                <Award className="mb-2 mx-auto text-[#00ad10]" />
                <h1 className="text-lg md:text-xl font-semibold mb-2">
                  Experiencia y Profesionalismo
                </h1>
                <p>
                  Equipo altamente capacitado para soluciones personalizadas y
                  efectivas.
                </p>
              </div>
              {/* Tarjeta 2: Tecnología Innovadora */}
              <div className="p-4 border rounded-lg text-center">
                <Cpu className="mb-2 mx-auto text-[#2245e3]" />
                <h1 className="text-lg md:text-xl font-semibold mb-2">
                  Tecnología Innovadora
                </h1>
                <p>
                  Uso de tecnologías avanzadas para servicios modernos y
                  eficientes.
                </p>
              </div>
              {/* Tarjeta 3: Servicio Integral */}
              <div className="p-4 border rounded-lg text-center">
                <Wrench className="mb-2 mx-auto text-[#2245e3]" />
                <h1 className="text-lg md:text-xl font-semibold mb-2">
                  Servicio Integral
                </h1>
                <p>
                  Mantenimiento completo abarcando desde salas de calderas hasta
                  paneles solares.
                </p>
              </div>

              {/* Tarjeta 4: Disponibilidad y Respuesta Rápida */}
              <div className="p-4 border rounded-lg text-center">
                <PhoneCall className="mb-2 mx-auto text-[#00ad10]" />
                <h1 className="text-lg md:text-xl font-semibold mb-2">
                  Disponibilidad y Respuesta Rápida
                </h1>
                <p>
                  Compromiso con la prontitud y eficacia en situaciones
                  críticas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="contacto" className="md:flex mt-40 gap-8">
          {/* Sección del Formulario */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-semibold mb-5">Contáctanos</h1>
            <form action={formSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  placeholder="Correo Electrónico"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  placeholder="Celular"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <ButtonSubmmit />
            </form>
          </div>

          {/* Sección de la Imagen */}
          <div className="w-full md:w-1/2 mt-10">
            <Image
              src="https://eihymsfhikncmipfrakl.supabase.co/storage/v1/object/public/mp3/persona-escribiendo-computadora-portatil-noche-generada-ia.jpg"
              alt="Persona escribiendo en computadora portátil"
              width={750}
              height={750}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <footer className="mt-10 md:mt-40  bg-[#2245e3] w-full flex flex-col md:flex-row items-start justify-between text-white p-10 ">
        {/* Logotipo y nombre */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-0">
          <Image
            src="/logo-blanco.svg"
            alt="Logo CentroGas"
            width={189}
            height={143}
          />
        </div>

        {/* Sección de Servicios */}
        <div className="flex flex-col mb-10 md:mb-0">
          <h3 className="font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2">
            <li>Sala de calderas</li>
            <li>Sala de bombas</li>
            <li>Grupo electrógeno</li>
            <li>Paneles solares</li>
            <li>Aguas servidas</li>
          </ul>
        </div>

        {/* Información de Contacto */}
        <div className="flex flex-col mb-10 md:mb-0">
          <h3 className="font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2">
            <li>Las Condes, Santiago</li>
            <li>+569 2802 3866</li>
            <li>contacto@centrogaslatam.cl</li>
          </ul>
        </div>

        {/* Enlaces a Redes Sociales */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Redes sociales</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com/centrogaslatam" className="mr-2">
              <Instagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

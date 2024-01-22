import Image from 'next/image'
import Tittle from '@/components/Tittle/Tittle'
import Subtitle from '@/components/Subtitle/Subtitle'
import Stats from '@/components/Stats/Stats'
import LogoClouds from '@/components/LogoClouds/LogoClouds'
import Prices from '@/components/Prices/Prices'
import services from '@/services'
import { RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri'


export default function Home() {
  const logos = [
    "/assets/images/logos/google.png",
    "/assets/images/logos/chrome.png",
    "/assets/images/logos/maps.png",
    "/assets/images/logos/google.png",
    "/assets/images/logos/chrome.png",
    "/assets/images/logos/maps.png",
    "/assets/images/logos/google.png",
    "/assets/images/logos/chrome.png",
    "/assets/images/logos/maps.png",
  ]

  const packages = [
    {
      id: 1,
      name: "Iniciación",
      price: "150",
      text: "30 valoraciones",
    },
    {
      id: 2,
      name: "Paquete 1",
      price: "350",
      text: "70 valoraciones",
    },
    {
      id: 3,
      name: "Paquete 2",
      price: "550",
      text: "150 valoraciones sin comentarios ni fotos",
    },
    {
      id: 4,
      name: "Paquete 3",
      price: "650",
      text: "200 valoraciones sin comentarios ni fotos",
    },
    {
      id: 5,
      name: "Paquete 4",
      price: "750",
      text: "250 valoraciones sin comentarios ni fotos",
    }
  ]


  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-black">
       <section id='/' className="w-full px-10 lg:px-20 xs:mt-48 sm:mt-40">
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-start w-full max-h-screen">
            <div className="flex flex-col items-center justify-center lg:w-1/2">
              <Tittle title={"Posiciónate en Google Maps"} color={"#fff"} />
              <Subtitle text={"Buenas valoraciones atraerán a más clientes a tu negocio y conseguirás quitarle clientes a tu competencia."} color={"#fff"} />
              <div className="flex flex-row items-center justify-start gap-x-4 py-8 w-full">
                <Stats number={"93%"} description={"de los consumidores escogen negocios con una nota superior a 4 puntos en google."} />
                <Stats number={"83.8%"} description={"es la participación de Google en el mercado de motores de búsqueda"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-1/2">
              <Image
                src="/assets/images/home.png"
                alt="Picture of reviews"
                width={500}
                height={500}
              />
            </div>
        </div>
        <LogoClouds logos={logos} />
      </section>
      <section id='/services' className="w-full px-10 lg:px-20">
      <Tittle title={"Servicios"} color={"#fff"} center/>
      <div className='flex flex-col lg:flex-row w-full justify-center py-10 '>
          {
            services.map((service) => (
              <div className='flex flex-col items-center justify-start gap-y-8 p-4 w-full h-42 purpleshadow m-2' key={service.id}>
                {service.icon}
                <Subtitle text={service.tittle} color={"#fff"} center/>
              </div>
            ))
          }
      </div>
      </section>
      <section id='/packages' className="w-full px-10 lg:px-20">
        <Tittle title={"Paquetes"} color={"#fff"} center/>
        <div className="flex items-center justify-center mt-20 pb-10">
          <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {
            packages.map((pack) => (
              <Prices key={pack.id} name={pack.name} price={pack.price} text={pack.text} />
            ))
          }
          </div>
        </div>
      </section>
      <section id='/us' className="w-full px-10 lg:px-20">
        <Tittle title={"Sobre nosotros"} color={"#fff"} center/>
        <div className='flex flex-col  w-full justify-center'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-x-4  w-full'>
            <div className='flex flex-col lg:items-start lg:justify-start lg:w-1/2 lg:h-96 mt-4 lg:m-0'>
              <Tittle title={"Misión"} color={"#d69de5"} />
              <Subtitle text={"Somos una empresa especializada en el campo del marketing digital, centrada en la estrategia de optimización de la presencia de nuestros clientes en Google Maps."} color={"#fff"} />
            </div>
            <div className='flex flex-col lg:items-start lg:justify-start lg:w-1/2 lg:h-96 my-4 lg:m-0'>
              <Tittle title={"Visión"} color={"#d69de5"} />
              <Subtitle text={"Liderar la revolución en el marketing digital mediante el uso estratégico de Google Maps.Queremos transformar la percepción actual, ayudando a las empresas a posicionarse con fuerza en el mercado y atraer a clientes potenciales de manera innovadora."} color={"#fff"} />
            </div>
          </div>
          <Tittle title={"Experiencia"} color={"#d69de5"} />
          <Subtitle text={`
            Nuestra trayectoria se ha ido tejiendo con historias de éxito. Durante años hemos forjado relaciones sólidas con destacadas empresas españolas, impulsando su posicionamiento en Google Maps.
            Estamos comprometidos con las 5 estrellas, nuestra experiencia respalda nuestra capacidad para conseguirlo e impulsar el éxito de nuestros clientes a través de Google Maps. `} color={"#fff"} />
          <div className='flex  items-center justify-start gap-x-4 w-full py-4'>
            <RiInstagramFill size={40} color={"#9634c5"} />
            <RiLinkedinBoxFill size={40} color={"#9634c5"} />
          </div>
        </div>
      </section>
      <section id='/function' className="w-full px-10 lg:px-20">
        <div className='flex flex-col items-center justify-center w-full'>
          <Tittle title={"¿Por qué enfocarnos en google maps?"} color={"#fff"} center/>
          <Image src="/assets/images/funcionamiento.png" alt="funcionamiento" width={600} height={600} className='rounded-md'/>
        </div>
      </section>
      <section id='/contact' className="w-full px-10 lg:px-20">
        <div className='flex flex-col items-center justify-center w-full'>
          <Tittle title={"Contacto"} color={"#fff"} center/>
        </div>
      </section>

    </main>
  )
}

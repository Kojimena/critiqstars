import Image from 'next/image'
import Tittle from '@/components/Tittle/Tittle'
import Subtitle from '@/components/Subtitle/Subtitle'
import Stats from '@/components/Stats/Stats'
import LogoClouds from '@/components/LogoClouds/LogoClouds'
import Prices from '@/components/Prices/Prices'
import services from '@/services'
import { RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri'
import ServiceItem from '@/components/ServiceItem/ServiceItem'
import Carousel from '@/components/Carousel/Carousel'
import ContactItem from '@/components/ContactItem/ContactItem'
import Timeline from '@/components/Timeline/Timeline'
import ImgText from '@/components/ImgText/ImgText'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'


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
      image : "/assets/images/boxes/1.png"
    },
    {
      id: 2,
      name: "Paquete 1",
      price: "350",
      text: "70 valoraciones",
      image : "/assets/images/boxes/2.png"
    },
    {
      id: 3,
      name: "Paquete 2",
      price: "550",
      text: "150 valoraciones",
      image : "/assets/images/boxes/3.png"
    },
    {
      id: 4,
      name: "Paquete 3",
      price: "650",
      text: "200 valoraciones",
      image : "/assets/images/boxes/4.png"
    },
    {
      id: 5,
      name: "Paquete 4",
      price: "750",
      text: "250 valoraciones",
      image : "/assets/images/boxes/5.png"
    }
  ]

  const about = [
    "/assets/images/about1.png",
    "/assets/images/about2.png",
    "/assets/images/about3.png",
    "/assets/images/about1.png",
    "/assets/images/about2.png",
    "/assets/images/about3.png",
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
            <div className="flex flex-col items-center justify-center lg:w-1/2 hover:animate-pulse">
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
              <ServiceItem key={service.id} service={service} />
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
              <Prices key={pack.id} name={pack.name} price={pack.price} text={pack.text} image={pack.image} />
            ))
          }
          </div>
        </div>
      </section>
      <section id='/us' className="w-full px-10 lg:px-20">
        <Tittle title={"Sobre nosotros"} color={"#fff"} center/>
        <div className='flex flex-col gap-8  w-full justify-center mt-8'>
            <ImgText title={"Misión"} 
              subtitle={"Somos una empresa especializada en el campo del marketing digital, centrada en la estrategia de optimización de la presencia de nuestros clientes en Google Maps."} 
              imgsrc={"/assets/images/mission.png"} />
            <ImgText reverse title={"Visión"} 
              subtitle={"Liderar la revolución en el marketing digital mediante el uso estratégico de Google Maps.Queremos transformar la percepción actual, ayudando a las empresas a posicionarse con fuerza en el mercado y atraer a clientes potenciales de manera innovadora."} 
              imgsrc={"/assets/images/vision.png"}
              />
            <ImgText title={"Experiencia"} 
              subtitle={`
                Nuestra trayectoria se ha ido tejiendo con historias de éxito. Durante años hemos forjado relaciones sólidas con destacadas empresas españolas, impulsando su posicionamiento en Google Maps.
                Estamos comprometidos con las 5 estrellas, nuestra experiencia respalda nuestra capacidad para conseguirlo e impulsar el éxito de nuestros clientes a través de Google Maps. `} 
                imgsrc={"/assets/images/experience.png"}
                />
            <div className='flex  items-center justify-start gap-x-4 w-full py-4'>
              <RiInstagramFill size={40} color={"#fff"} />
              <RiLinkedinBoxFill size={40} color={"#fff"} />
            </div>
          <Carousel images={about} />
        </div>
      </section>
      <section id='/functioning' className="w-full px-10 lg:px-20">
        <div className='flex flex-col items-center justify-center w-full'>
          <Tittle title={"Funcionamiento"} color={"#fff"} center/>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8  w-full'>
            <Timeline />
            <Image src="/assets/images/functioning.png" alt="Picture of the author" width={500} height={500} />
          </div>

        </div>
      </section>
      <section id='/contact' className="w-full px-10 lg:px-20">
        <div className='flex flex-col items-center justify-center w-full'>
          <Tittle title={"Contacto"} color={"#fff"} center/>
          <ContactItem name={"Nomade global talent"} number={"https://wa.me/34685693461"} mail={"gerencia@nomadeglobaltalent.com "}/>
        </div>
      </section>
      <WhatsAppButton />


    </main>
  )
}

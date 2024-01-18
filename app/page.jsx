import Image from 'next/image'
import Tittle from '@/components/Tittle/Tittle'
import Subtitle from '@/components/Subtitle/Subtitle'
import Stats from '@/components/Stats/Stats'
import LogoClouds from '@/components/LogoClouds/LogoClouds'
import Prices from '@/components/Prices/Prices'
import services from '@/services'

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


  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-black">
       <section id='/' className="w-full px-10 lg:px-20 xs:mt-36 sm:mt-40">
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
      <div className='flex flex-col lg:flex-row w-full justify-center py-10'>
          {
            services.map((service) => (
              <div className='flex flex-col items-center justify-start gap-y-8 p-4 w-full h-42' key={service.id}>
                {service.icon}
                <Subtitle text={service.tittle} color={"#fff"} center/>
              </div>
            ))
          }
      </div>
      </section>
      <section id='/services' className="w-full px-10 lg:px-20">
        <Prices />
      </section>
    </main>
  )
}

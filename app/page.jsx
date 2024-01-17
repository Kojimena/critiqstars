import Image from 'next/image'
import Tittle from '@/components/Tittle/Tittle'
import Subtitle from '@/components/Subtitle/Subtitle'
import Stats from '@/components/Stats/Stats'
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-black">
       <section id='/' className="w-full px-10 lg:px-20 xs:my-20">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen">
            <div className="flex flex-col items-center justify-center lg:w-1/2">
              <Tittle title={"Comprar reseñas de Google"} color={"#fff"} />
              <Subtitle text={"Buenas valoraciones atraerán a más clientes a tu negocio y conseguirás quitarle clientes a tu competencia."} color={"#fff"} />
              <div className="flex flex-row items-center justify-start gap-x-4 py-8 w-full">
                <Stats number={"80%"} description={"Aumento de nuevos clientes en 3 meses"} />
                <Stats number={"+100"} description={"Reseñas personalizadas creadas cada mes"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-1/2">
              <Image
                src="/assets/images/logo.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
        </div>
      </section>
    </main>
  )
}

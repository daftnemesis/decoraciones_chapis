import { CardItem } from "../components/CardItem"
import { NavBar } from "../ui/NavBar"

export const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <div className="bg-gradient-to-b from-pink-200 via-green-200 to-blue-300 h-screen relative flex flex-col justify-center md:items-center">
        <h1 className="text-blue-400 font-heading text-5xl text-center pt-16">Te damos la bienvenida a:</h1>
        <img src="../assets/logo_main.png" alt="" className="md:w-3/6" />
      </div>

      <div className="pt-6 px-4 text-center">
        <h2 className="font-heading text-4xl text-blue-400">En Decoraciones Chapis contamos con dulceros, pinatas, centros de mesa y mucho mas...</h2>

        <div className="md:grid md:grid-cols-3">

          <CardItem nombre='batman' tipo='pinata' />

          <CardItem nombre='sanvalentin' tipo='arreglo' />

          <CardItem nombre='XV' tipo='arreglo' />

        </div>
      </div>
    </div>

  )
}

import { NavBar } from "../ui/NavBar"
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter"

export const GeneralPage = ({
  tipo
}) => {

  const name = capitalizeFirstLetter(tipo)

  return (
    <>
      <NavBar />
      <h1 className="font-heading text-4xl text-blue-400 text-center mt-5">Bienvenidos a la pagina de {name}</h1>
    </>
  )
}

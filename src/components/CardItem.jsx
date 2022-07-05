import { useNavigate } from "react-router-dom"
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter"

export const CardItem = ({
  id,
  tipo,
  nombre
}) => {
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${tipo}s`)
  }
  const rutaImg = `/assets/${tipo}/${tipo}_${nombre}.png`

  const name = capitalizeFirstLetter(tipo)

  return (
    <div className="max-w-sm bg-pink-200 rounded-lg border border-green-200 shadow-md my-5 md:h-fit">
      <div className="h-4/6">
        <a href="">
          <img src={rutaImg} alt="" className=""/>
        </a>
      </div>
      <div className="p-5">
        <a href="">
          <h5 className="font-semibold text-lg text-blue-400">
            {`${name}s`}
          </h5>
        </a>
        <p className="font-normal text-sm text-blue-400">De cualquier tematica disponible</p>
        <button 
          className="text-green-600 bg-green-200 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2"
          onClick={handleClick}
        >
          Conoce Mas
        </button>
      </div>
    </div>
  )
}

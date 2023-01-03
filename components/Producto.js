import { formatearDinero } from "../helpers"
import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"

const Producto = ({ producto }) => {

    const {handleSetProdcuto,handleChangeModal} =  useQuiosco()
    const { nombre, imagen, precio } = producto

    return (
        <div className="border   flex flex-col justify-center text-center items-center ">
            <Image
            className="pt-3"
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen Platillo ${nombre}`}
                width={600}
                height={500}
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-60 mt-5 p-3 uppercase font-bold"
                    onClick={()=>{
                        handleChangeModal()
                        handleSetProdcuto(producto)
                       
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Producto

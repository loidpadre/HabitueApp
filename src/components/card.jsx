import {Handshake} from "lucide-react"
import {BiLogoWhatsapp} from "react-icons/bi"
import { Link } from "react-router-dom"
export const Card = ({casa} ) =>{
    const {id, image, description, price,localization,cep,rua } = casa
    return(
        <div className="w-80 rounded-xl flex flex-col hover:cursor-pointer hover:shadow-lg hover:scale-105 transition duration-200 ease-in-out  gap-5 bg-orange-700 text-white">
            <img src={image.imagePrincipal} className="w-full h-60 object-cover rounded-ss-xl rounded-se-xl" alt="image" />
            <div className="p-5">
                <div className="flex justify-between items-center ">
                    <h1 className="text-2xl font-semibold">R$ {price}</h1>
                    <p className="text-md text-orange-700 bg-white p-2 rounded-md border-none">{localization}</p>
                </div>
                <div className="py-2">
                    <p className="font-semibold text-xl">Rua: <span className="font-semibold">{rua}</span></p>
                </div>
                <div>
                    <p >Descrição: <span className="text-white/55">{description}</span></p>
                </div>
                <button className="mt-4 p-2 rounded-md w-full align-middle bg-zinc-900 text-white"><Link to={`detail/${id}`} >Ver destalhes</Link></button>
                <div className="mt-2 justify-center p-2 flex gap-5 rounded-md w-full align-middle bg-green-700 text-white">
                    <BiLogoWhatsapp size={27}/>
                    <p>+55 8675534322</p>
                </div>
            </div>
        </div>
    )
}
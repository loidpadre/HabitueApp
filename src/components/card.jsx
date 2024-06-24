import { Handshake } from "lucide-react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Card = ({ casa }) => {
  const { _id, image, description, price, localization, cep, rua } = casa;
  return (
    // Aqui, "w-full sm:w-3/4 md:w-64" fará o card ocupar toda a largura em telas muito pequenas,
    // 3/4 da largura em telas pequenas (sm:) e, finalmente, a largura original de 64 em telas médias para cima.
    <div className="w-full sm:w-3/4 md:w-64 rounded-xl flex flex-col hover:cursor-pointer hover:shadow-lg hover:scale-105 transition duration-200 ease-in-out gap-5 bg-white shadow-lg rounded-lg">
      <img
        src={image.imagePrincipal}
        className="w-full h-60 object-cover rounded-t-lg"
        alt="Imagem da Casa"
      />
      <div className="p-5 text-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-orange-600">R$ {price}</h1>
          <p className="text-md bg-orange-700 text-white p-2 rounded-md">
            {" "}
            {localization}
          </p>
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold">
            Rua: <span className="font-normal">{rua}</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-end">
          <button className="mt-4 p-2 rounded-md w-full bg-zinc-900 text-white hover:bg-zinc-800 transition duration-300">
            <Link
              to={`detail/${_id}`}
              className="w-full h-full flex justify-center items-center"
            >
              Ver detalhes
            </Link>
          </button>
          <div className="mt-2 justify-center p-2 flex gap-5 rounded-md w-full bg-green-700 text-white hover:bg-green-800 transition duration-300">
            <BiLogoWhatsapp size={27} />
            <p>+55 8675534322</p>
          </div>
        </div>
      </div>
    </div>
  );
};

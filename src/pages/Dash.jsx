import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dash() {
  const [casas, setCasas] = useState([]);

  async function deleteCasa(id) {
    try {
      await axios.delete(`https://habitueapi.onrender.com/dash/${id}`);
      // Após a casa ser deletada com sucesso, atualize o estado para refletir essa mudança.
      setCasas(casas.filter((casa) => casa._id !== id));
    } catch (error) {
      console.error("Erro ao deletar a casa:", error);
      // Aqui você pode implementar uma notificação ou tratamento de erro mais apropriado.
    }
  }

  async function getData() {
    try {
      const response = await axios.get("https://habitueapi.onrender.com/");
      console.log(response.data);
      setCasas(response.data);
    } catch (error) {
      console.log("erro ao trazer dados");
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Ajustado para ser mais responsivo */}
      <div className="flex justify-between items-center flex-wrap">
        {" "}
        {/* Adicionado flex-wrap para responsividade */}
        <h1 className="text-3xl lg:text-5xl text-orange-700 mb-4">
          Dashboard
        </h1>{" "}
        {/* Tamanho do texto ajustado para telas menores */}
        <Link to="add">
          <button className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
            Adicionar Casa
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
        {" "}
        {/* Ajustado para centralizar em telas menores */}
        {casas.map((casa, index) => (
          <div
            key={index}
            className="w-full sm:w-64 p-4 bg-white shadow-lg rounded-lg"
          >
            {" "}
            {/* Ajustado para ocupar toda a largura em telas pequenas */}
            <img
              src={casa.image.imagePrincipal}
              alt="Casa"
              className="w-full h-36 object-cover rounded-md"
            />
            <div className="mt-2">
              <h2 className="text-xl font-bold text-orange-600">{`R$${casa.price}`}</h2>
              <p className="text-sm text-gray-600">{casa.localization}</p>
              <p className="text-sm mt-2">{casa.description}</p>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <button
                onClick={() => deleteCasa(casa._id)}
                className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
              >
                Remover
              </button>
              <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dash;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddHome() {
  const navigate = useNavigate();

  const [imagePrincipal, setImagePrincipal] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [nQuartos, setNQuartos] = useState("");
  const [coberta, setCoberta] = useState("");
  const [negociation, setNegociation] = useState("");
  const [localization, setLocalization] = useState("");
  const [rua, setRua] = useState("");
  const [cep, setCep] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHome = {
      image: {
        imagePrincipal,
        image2,
        image3,
        image4,
      },
      description,
      price: parseFloat(price),
      nQuartos: parseInt(nQuartos, 10),
      coberta: coberta.toLowerCase() === "sim",
      negociation: negociation.toLowerCase() === "sim",
      localization,
      rua,
      cep,
    };

    async function createHome() {
      try {
        const response = await axios.post(
          "https://habitueapi.onrender.com/dash/add",
          newHome,
        );
        console.log(response);
        navigate("/dash");
      } catch (error) {
        console.error("Erro ao cadastrar casa:", error);
      }
    }

    createHome();
  };

  return (
    <div className="max-w-4xl w-full mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        <button onClick={() => navigate(-1)} className="text-lg sm:text-xl">
          {"<"}
        </button>{" "}
        Adicionar Nova Casa
      </h2>
      <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="URL da Imagem Principal"
          className="border rounded-md p-2"
          value={imagePrincipal}
          onChange={(e) => setImagePrincipal(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL da Imagem 2"
          className="border rounded-md p-2"
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL da Imagem 3"
          className="border rounded-md p-2"
          value={image3}
          onChange={(e) => setImage3(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL da Imagem 4"
          className="border rounded-md p-2"
          value={image4}
          onChange={(e) => setImage4(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          className="border rounded-md p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Preço"
          className="border rounded-md p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número de Quartos"
          className="border rounded-md p-2"
          value={nQuartos}
          onChange={(e) => setNQuartos(e.target.value)}
        />
        <input
          type="text"
          placeholder="Coberta (sim/não)"
          className="border rounded-md p-2"
          value={coberta}
          onChange={(e) => setCoberta(e.target.value)}
        />
        <input
          type="text"
          placeholder="Negociação (sim/não)"
          className="border rounded-md p-2"
          value={negociation}
          onChange={(e) => setNegociation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Localização"
          className="border rounded-md p-2"
          value={localization}
          onChange={(e) => setLocalization(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rua"
          className="border rounded-md p-2"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <input
          type="text"
          placeholder="CEP"
          className="border rounded-md p-2"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 text-white rounded-md p-2 transition duration-300"
        >
          Adicionar Casa
        </button>
      </form>
    </div>
  );
}

export default AddHome;

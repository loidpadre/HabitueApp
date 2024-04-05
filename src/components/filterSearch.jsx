import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export const FilterSearch = ({ filterHomes, filterLocal, all }) => {
    const [valor, setValor] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setValor(value);
        filterHomes(value);
    };

    function handleLocal(localization) {
        filterLocal(localization);
    }

    return (
        <div className="flex flex-col md:flex-row justify-between rounded-md items-center mb-10 mx-4 md:mx-10 lg:mx-96 bg-zinc-900 text-white py-4 px-8">
            {/* Campo de pesquisa */}
            <div className="md:w-1/2 bg-white rounded-lg flex justify-between py-2 px-5 mb-2 md:mb-0">
                <input
                    className="border-none outline-none focus:text-black bg-transparent w-full"
                    value={valor}
                    onChange={handleChange}
                    type="text"
                    placeholder="Pesquisar por preço"
                />
                <Search className="text-zinc-900 size-5 hover:cursor-pointer" />
            </div>
            {/* Botões de filtro */}
            <div className="flex flex-wrap ml-5 justify-end md:w-1/2 gap-4 text-ml">
                <button onClick={all} className="hover:border-b-4 hover:text-white transition duration-300 ease-in-out border-orange-700">
                    Todas
                </button>
                <button onClick={() => handleLocal("redenção")} className="hover:border-b-4 hover:text-white transition duration-300 ease-in-out border-orange-700 text-zinc-500">
                    Redenção
                </button>
                <button onClick={() => handleLocal("acarape")} className="hover:border-b-4 hover:text-white transition duration-300 ease-in-out border-orange-700 text-zinc-500">
                    Acarape
                </button>
            </div>
        </div>
    );
};

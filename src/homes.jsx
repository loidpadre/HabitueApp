import { useEffect, useState } from "react"
import { Card } from "./components/card"
import axios from "axios"
import { FilterSearch } from "./components/filterSearch"
export const Homes = () => {
    const [casas, setCasas] = useState([]); // Estado para dados filtrados ou atuais
    const [casasOriginais, setCasasOriginais] = useState([]); // Estado para manter os dados originais
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:3000/CasasInfo");
            setCasas(response.data);
            setCasasOriginais(response.data); // Salva os dados originais
            setLoading(false); // Define o carregamento como falso aqui para evitar múltiplos estados de loading
        } catch (error) {
            console.log("Erro ao trazer os dados");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    function filterHomes(price) {
        if (price === "") {
            setCasas(casasOriginais);
        } else {
            const priceNumber = Number(price);
            if (!isNaN(priceNumber)) {
                const newHomes = casasOriginais.filter((casa) => casa.price <= priceNumber);
                setCasas(newHomes);
            }
        } 
    }

    function filterLocal(local) {
        if (local === "") {
            setCasas(casasOriginais);
        } else {
            const newHomesLocal = casasOriginais.filter((casa) => casa.localization.toLowerCase() === local.toLowerCase());
            setCasas(newHomesLocal);
        }
    }

    function all() {
        setCasas(casasOriginais); // Restaura os dados originais
    }

    // Removi o segundo useEffect para simplificar o código

    return (
        <div>
        {
            loading ? (
                <div className="flex gap-2 justify-center items-center text-center mt-40 mb-60">
                    {/* Spinners mantêm o mesmo estilo independente do tamanho da tela */}
                    <div className="w-5 h-5 rounded-full animate-pulse bg-orange-700"></div>
                    <div className="w-5 h-5 rounded-full animate-pulse bg-orange-700"></div>
                    <div className="w-5 h-5 rounded-full animate-pulse bg-orange-700"></div>
                </div>
            ) : (
                <div>
                    <FilterSearch filterHomes={filterHomes} filterLocal={filterLocal} all={all}/>
                    {/* Ajusta o layout dos cards para diferentes tamanhos de tela */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-10 px-4 md:px-10 lg:px-56">
                        {
                            casas.map((casa) => (
                                <Card key={casa.id} casa={casa}/>
                            ))
                        }
                    </div>
                </div>
            )
        }
    </div>
    );
};

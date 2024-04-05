import { useEffect, useState } from "react"
import { CasasInfo } from "./data"
import { Card } from "./components/card"

import { FilterSearch } from "./components/filterSearch"
export const Homes = ( ) =>{
    const [casas, setCasas] = useState(CasasInfo)
    
    
    function filterHomes(price) {
        if (price === "") {
            // Se o input está vazio, resete para mostrar todas as casas
            setCasas(CasasInfo)
        } else {
            const priceNumber = Number(price)
            if (!isNaN(priceNumber)) {
                const newHomes = CasasInfo.filter((casa) => casa.price <= priceNumber)
                setCasas(newHomes)
            }
        }
    }

    function filterLocal(local){
        if (local === "") {
            // Se o input está vazio, resete para mostrar todas as casas
            setCasas(CasasInfo)
        } else {
            const newLocal = local
            if (newLocal) {
                const newHomesLocal = CasasInfo.filter((casa) => casa.localization.toLowerCase() === local.toLowerCase())
                setCasas(newHomesLocal)
            }
        }
    }
    function all(){ 
        setCasas(CasasInfo)
    }

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLoading(false) 
        }, 2000)

        
        return () => clearTimeout(timer)
    }, []) 

    return(
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

    )
}
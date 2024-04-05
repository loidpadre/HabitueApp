import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CasasInfo } from "../data";
import { BiLogoWhatsapp } from "react-icons/bi";

export const Detail = () => {
    let { id } = useParams();
    const [casa, setCasas] = useState(null);
    const [imagePrincipal, setImagePrincipal] = useState('');

    useEffect(() => {
        const casaDet = CasasInfo.find((casaDetail) => casaDetail.id === parseInt(id));
        if (casaDet) {
            setCasas(casaDet);
            setImagePrincipal(casaDet.image.imagePrincipal);
        }
    }, [id]);

    function changeImage(imageUrl) {
        setImagePrincipal(imageUrl);
    }

    return casa && casa.image ? (
        <div className="flex flex-col md:flex-row items-center mx-4 md:mx-52 my-10 justify-evenly">
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                <div className="flex flex-col gap-5 items-center md:items-start">
                    <img src={imagePrincipal} className="rounded-md md:w-96 md:h-96 w-60 h-60 object-cover" alt="Imagem Principal da Casa" />
                    <div className="flex gap-2 flex-wrap justify-center">
                        <img src={casa.image.imagePrincipal} onClick={() => changeImage(casa.image.imagePrincipal)} className="rounded-md w-24 h-24 object-cover cursor-pointer" alt="Imagem da Casa" />
                        <img src={casa.image.image2} onClick={() => changeImage(casa.image.image2)} className="rounded-md w-24 h-24 object-cover cursor-pointer" alt="Imagem da Casa" />
                        <img src={casa.image.image3} onClick={() => changeImage(casa.image.image3)} className="rounded-md w-24 h-24 object-cover cursor-pointer" alt="Imagem da Casa" />
                        <img src={casa.image.image4} onClick={() => changeImage(casa.image.image4)} className="rounded-md w-24 h-24 object-cover cursor-pointer" alt="Imagem da Casa" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-5 md:mt-0">
            <h1 className="text-4xl text-orange-700">Preço: R$ {casa.price}</h1>
                <p className="text-ml text-orange-700">CEP: <span className="text-zinc-950">{casa.cep}</span></p>
                <p className="text-ml text-orange-700">Localização: <span className="text-zinc-950">{casa.localization}</span></p>
                <p className="text-ml text-orange-700">Nº Quartos: <span className="text-zinc-950">{casa.nQuartos}</span></p>
                <p className="text-ml text-orange-700">Teto Coberto: <span className="text-zinc-950">{casa.coberta}</span></p>
                <p className="text-ml text-orange-700"> Negociação: <span className="text-zinc-950">{casa.negociation}</span></p>
                <h2 className="text-ml text-orange-700">Descrição:</h2>
                <p className="text-ml">{casa.description}</p>
                <div className="mt-2 justify-center p-2 hover:cursor-pointer flex gap-5 rounded-md w-full align-middle bg-green-700 text-white">
                    <BiLogoWhatsapp size={27}/>
                    <p>+55 8675534322</p>
                </div>
            </div>
        </div>
    ) : (
        <p>Carregando detalhes da casa...</p>
    );
};

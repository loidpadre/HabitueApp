import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        // Use flex-col e gap-y para empilhar elementos verticalmente em telas pequenas
        <div className="mt-10 bg-zinc-950 text-white flex flex-col md:flex-row justify-between py-10 px-4 md:px-32 gap-y-5">
            <div>
                <h1 className="text-3xl text-orange-700">HABITUE</h1>
                <span className="text-white/55">Encontre o seu lar</span>
            </div>
            <div>
                <ul className="flex flex-col text-base">
                    <li className="rounded-lg transition-all cursor-pointer"><Link to="/">Casas</Link></li>
                    <li className="text-white/55 hover:text-white rounded-lg transition-all cursor-pointer"><Link to="about">Quem somos</Link></li>
                    <li className="text-white/55 hover:text-white rounded-lg transition-all cursor-pointer"><Link to="contact">Contatos</Link></li>
                </ul>
            </div>
            <div>
                <p>&copy;Habitue. Todos os direitos reservados.</p>
                <p className="text-orange-700">Created by Scorpion Company</p>
            </div>
        </div>
    );
}

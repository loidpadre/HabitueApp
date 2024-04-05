import { useContext, useState } from "react";
import logo from "../assets/habitue.png";
import { Link } from "react-router-dom";
import { Menu, X} from "lucide-react"; // Importa os ícones do Heroicons

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu

    return (
        <div className="flex flex-wrap justify-between items-center bg-zinc-900 text-white py-2 px-4 md:px-10">
            <div>
                <Link to="/"><img src={logo} className="w-16 md:w-24" alt="logo" /></Link>
            </div>

            {/* Botão do menu hambúrguer que só aparece em telas pequenas */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Menu que se ajusta com base no estado isMenuOpen */}
            <nav className={`w-full md:w-auto text-center md:text-left ${isMenuOpen ? "block" : "hidden"} md:block`}>
                <ul className="flex flex-col md:flex-row justify-center gap-2 text-base mt-4 md:mt-0">
                    <li className="rounded-lg p-2 transition-all cursor-pointer"><Link to="/">Casas</Link></li>
                    <li className="text-white/55 hover:text-white rounded-lg p-2 transition-all cursor-pointer"><Link to="about">Quem somos</Link></li>
                    <li className="text-white/55 hover:text-white rounded-lg p-2 transition-all cursor-pointer"><Link to="contact">Contatos</Link></li>
                </ul>
            </nav>
            
            <div className={`w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? "block" : "hidden"} md:block`}>
                <p className="text-white/55 text-center md:text-left">Ajude a manter o site</p>
                <span className="text-orange-500 hover:text-orange-300 transition duration-200 block text-center md:text-left"><Link to="doation">FAÇA UMA DOAÇÂO</Link></span>
            </div>
        </div>
    );
}

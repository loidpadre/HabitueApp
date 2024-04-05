import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 mx-4 md:mx-52 mt-32 mb-28 justify-between">
            <form className="w-full md:w-1/2">
                <input type="text" className="w-full p-3 border-none rounded-md bg-zinc-950 mb-2 text-white" placeholder="Insira o seu nome" />
                <input type="email" className="w-full p-3 border-none rounded-md bg-zinc-950 mb-2 text-white" placeholder="Insira o seu e-mail" />
                <textarea className="w-full placeholder:text-white/50 p-3 border-none rounded-md bg-zinc-950 mb-2 resize-none text-white" cols="30" rows="5" placeholder="Conteudo"></textarea>
                <button className="p-2 border-none rounded-md bg-orange-700 text-white px-5 w-full">Enviar</button>
            </form>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                <h1 className="text-orange-700 text-4xl md:text-6xl mb-5 text-center md:text-left">Nos segue nas nossas redes sociais</h1>
                <div className="flex gap-5">
                    <a href="https://www.facebook.com/profile.php?id=100066885494600" target="_blank"><Facebook size={24} className="hover:cursor-pointer"/></a>
                    <a href="https://www.instagram.com/scorpionstartup/?hl=pt-br" target="_blank" ><Instagram size={24} className="hover:cursor-pointer"/></a>
                    <a href="https://www.linkedin.com/in/loidpadre/" target="_blank" ><Linkedin size={24} className="hover:cursor-pointer"/></a>
                    <a href="https://github.com/loidpadre" target="_blank"><Github size={24} className="hover:cursor-pointer"/></a>
                </div>
            </div>
        </div>
    );
}

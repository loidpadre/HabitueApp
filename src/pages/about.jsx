import logo from "../assets/habitue.png";

export const About = () => {
    return (
        // Alterado de md:flex-col para flex-col para que o layout seja sempre em coluna, e ajustado o espaçamento para telas menores
        <div className="flex flex-col items-center gap-10 mx-4  md:m-52">
            <img src={logo} alt="Habitue Logo" className="w-1/2 mt-[-6rem] md:w-1/4" /> 
            <div className="text-center md:text-left"> 
                <h1 className="text-orange-700 text-4xl md:text-6xl mb-5">Habitue</h1>
                <p>A Habitue é uma plataforma inovadora e amigável criada pela <span className="text-orange-700">SCORPION COMPANY</span>, dedicada ao aluguel de casas, projetada para conectar proprietários e inquilinos de forma eficiente e segura. Nossa missão é simplificar o processo de locação, tornando-o mais transparente, rápido e sem complicações para todos os envolvidos. Com uma interface intuitiva, a Habitue permite aos usuários navegar facilmente por uma ampla seleção de propriedades, filtrando por localização, preço, número de quartos e outras características essenciais para encontrar a casa perfeita para suas necessidades.</p>
            </div>
        </div>
    );
}

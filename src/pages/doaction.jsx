import { HandCoins } from "lucide-react";

export const Doaction = () => {
    return (
        // Usa margem automática para centralizar e padding para espaçamento interno. Ajusta a largura para diferentes tamanhos de tela.
        <div className="px-4 lg:px-20 mx-auto mt-32 max-w-screen-lg">
            <h1 className="text-3xl lg:text-5xl text-orange-700">Ajude-nos a Manter a Comunidade Habitue Forte</h1>
            <div className="flex bg-orange-700 text-white p-5 rounded-md gap-5 mt-10 items-center">
                <HandCoins className="w-10 h-10 lg:w-14 lg:h-14" />
                <h1 className="font-bold text-lg lg:text-xl">Chave pix: zeferino@gmail.com</h1>
            </div>
            <p className="mt-8 text-lg lg:text-xl">No coração da Habitue, existe uma missão simples: conectar pessoas a lares onde elas possam criar memórias inesquecíveis. Desde o início, nos dedicamos a facilitar a busca pelo aluguel perfeito, tornando o processo tão tranquilo e acessível quanto possível. Agora, pedimos sua ajuda para continuar essa missão.</p>
            <p className="mt-10 text-lg lg:text-xl">
                <span className="text-orange-700 mx-5">Apoie a Inovação:</span> Sua doação nos ajuda a investir em novas tecnologias e recursos que tornam a busca e oferta de aluguéis mais eficiente e amigável.
                <br />
                <span className="text-orange-700 mx-5">Mantenha o Site Acessível:</span> Queremos continuar oferecendo um serviço excepcional sem sobrecarregar nossos usuários com taxas e custos adicionais. Sua contribuição direta permite que isso aconteça.
                <br />
                <span className="text-orange-700 mx-5">Contribua para Uma Comunidade Vibrante:</span> Além de ajudar a manter o site, sua doação apoia iniciativas comunitárias, incluindo recursos educacionais para inquilinos e proprietários, e ações voltadas para a sustentabilidade no setor imobiliário.
                <br /><br />
                Cada doação, não importa o tamanho, é um passo em direção a um futuro onde todos podem encontrar o lugar perfeito para chamar de lar. Junte-se a nós nessa jornada. Com a sua ajuda, podemos continuar a construir uma comunidade Habitue mais forte, inclusiva e acolhedora.
                <br /><br />
                Faça uma doação hoje e seja parte integral dessa mudança positiva. Agradecemos de coração por qualquer apoio que você possa oferecer.
            </p>
        </div>
    );
}

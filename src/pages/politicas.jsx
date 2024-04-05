import React from 'react';

function Politicas() {
  return (
    // Aqui, ajustamos a classe de largura para ser responsiva. 'max-w-[870px]' define uma largura máxima,
    // enquanto 'w-full' faz com que o container ocupe a largura total disponível em telas menores.
    // O uso de 'px-4' adiciona um pouco de padding nas laterais para dispositivos menores.
    <div className='max-w-[870px] w-full m-auto my-32 px-4'>
        <h2 className='text-3xl md:text-5xl text-orange-700'>Políticas de Uso da Plataforma "HABITUE"</h2>
      <p className='mt-14 text-sm md:text-base'>
        Bem-vindo ao CasaSegura! Ao usar nossa plataforma, você concorda com as seguintes políticas de uso. Essas políticas são projetadas para garantir uma experiência segura, confiável e agradável para todos os usuários.

        <br/><br/>1. <span className='text-orange-700'>Aceitação dos Termos</span>
        <br/>Ao acessar e usar o CasaSegura, você aceita cumprir estas políticas de uso, bem como nossa Política de Privacidade e quaisquer outros termos e condições relevantes. Se você não concorda com algum dos termos, por favor, não utilize nossos serviços.
        <br/><br/>3. <span className='text-orange-700'>Reservas e Pagamentos</span>
        <br/><strong>Compromisso:</strong> Ao realizar uma reserva, você concorda em cumprir os termos estabelecidos pelo proprietário da casa, incluindo preço, duração da estadia e regras da casa.
        <br/><strong>Pagamentos:</strong> Todos os pagamentos devem ser processados através da plataforma CasaSegura. Nunca envie dinheiro diretamente aos proprietários.
        <br/><br/>4. <span className='text-orange-700'>Cancelamentos e Reembolsos</span>
        <br/>A política de cancelamento e reembolso será determinada pelo proprietário e claramente indicada na listagem da casa. Em caso de disputas, a CasaSegura atuará como mediadora para encontrar uma resolução justa.
        <br/><br/>5. <span className='text-orange-700'>Resolução de Disputas</span>
        <br/>Encorajamos a resolução direta de disputas entre usuários. No entanto, a CasaSegura pode intervir e oferecer soluções de resolução de disputas conforme necessário.
        <br/><br/>6. <span className='text-orange-700'>Alterações nas Políticas de Uso</span>
        <br/>A CasaSegura reserva-se o direito de alterar estas políticas a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
        <br/><br/>7. Contato
        <br/>Para dúvidas, comentários ou reclamações relacionadas a estas políticas, por favor, entre em contato conosco através do <span className='text-orange-700'>Scorpionstartt@gmail.com</span>.
      </p>
    </div>
  );
}

export default Politicas;

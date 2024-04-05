import React, { useState } from 'react';

// Definindo as perguntas e respostas
const faqs = [
  {
    question: "Como posso alugar uma casa?",
    answer: "Você pode alugar uma casa navegando pelo nosso site, escolhendo a casa desejada e Entrar em contacto com o proprietario da casa."
  },
  {
    question: "Qual é o processo para listar minha casa?",
    answer: "Voçê pode entrar em contacto conosco para arrendar no sistema +55 85 993433321."
  },
  {
    question: "Posso cancelar minha reserva?",
    answer: "Sim, cancelamentos são permitidos, mas certifica-se de anunciar o cancelamente da reserva ao proprietario"
  },
  {
    question: "Como posso pagar pela locação?",
    answer: "O pagamento pode ser feito depois da negociação com o proprietario do imovel."
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: "Você pode entrar em contato conosco através do formulário de contato no nosso site ou pelo e-mail scorpionstartt@gmail.com"
  }
];

function Faq() {
  const [visibleAnswer, setVisibleAnswer] = useState(Array(faqs.length).fill(false));

  const toggleAnswer = index => {
    const newVisibleAnswer = [...visibleAnswer];
    newVisibleAnswer[index] = !newVisibleAnswer[index];
    setVisibleAnswer(newVisibleAnswer);
  };

  return (
    // Ajustando margens para serem responsivas
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-64 my-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 my-12 text-orange-700 text-center md:text-left">Perguntas Frequentes (FAQ)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="question text-left p-4 rounded-md w-full text-lg font-semibold bg-zinc-900 text-white hover:bg-orange-700"
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
          </button>
          {visibleAnswer[index] && (
            <p className="answer mt-2 p-4 bg-gray-50">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;

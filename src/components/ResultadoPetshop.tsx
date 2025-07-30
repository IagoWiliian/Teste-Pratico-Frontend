import React from "react";

interface ResultadoPetshopProps {
  nome: string;
  precoTotal: number;
}

const ResultadoPetshop: React.FC<ResultadoPetshopProps> = ({ nome, precoTotal }) => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl shadow-lg p-8 flex flex-col items-center border border-green-300
      transition-transform transition-shadow duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:bg-blue-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Melhor Petshop Encontrado!</h2>
      <div className="w-full flex flex-col gap-2 mb-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Nome:</span>
          <span className="text-gray-900">{nome}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Preço Total:</span>
          <span className="text-green-700 font-bold">R$ {precoTotal.toFixed(2)}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 text-center">
        Confira as condições e horários antes de agendar. Seu pet merece o melhor!
      </p>
    </div>
  );
};

export default ResultadoPetshop;
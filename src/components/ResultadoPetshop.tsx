import React from "react";

interface ResultadoPetshopProps {
  nome: string;
  precoTotal: number;
}

const ResultadoPetshop: React.FC<ResultadoPetshopProps> = ({ nome, precoTotal }) => {
  return (
    <div className="resultado">
      <h2>Melhor Petshop: {nome}</h2>
      <p>Preço Total: R$ {precoTotal.toFixed(2)}</p>
    </div>
  );
};

export default ResultadoPetshop;

import React, { useEffect, useState } from "react";

const dicas = [
  "Encontre o melhor petshop com menor custo!",
  "Compare preços e economize!",
  "Seu pet merece carinho e cuidado!"
];

function Mascote() {
  const [dicaIndex, setDicaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDicaIndex((prev) => (prev + 1) % dicas.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img
        src="https://ik.imagekit.io/uhimtlk7c/istockphoto-1180989037-612x612.jpg?updatedAt=1753927853758"
        alt="Mascote Petshop"
        className="w-14 h-14 animate-bounce"
        style={{ animationDuration: "2s" }}
      />
      <div className="mt-2 px-3 py-1 bg-blue-100 rounded-lg shadow text-blue-700 text-xs font-semibold text-center transition-all duration-500">
        {dicas[dicaIndex]}
      </div>
    </div>
  );
}

export default Mascote;
import React, { useState } from "react";
import api from "../services/Service";
import Mascote from "../components/mascote/Mascote";

interface Resultado {
  nome: string;
  precoTotal: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState("");
  const [caesPequenos, setCaesPequenos] = useState(0);
  const [caesGrandes, setCaesGrandes] = useState(0);
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  const buscarMelhorPetshop = async () => {
    try {
      const response = await api.post("/melhor-petshop", {
        data: formatDate(data),
        caesPequenos,
        caesGrandes,
      });
      setResultado(response.data as Resultado);
    } catch (error) {
      alert("Erro ao buscar o melhor petshop.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-center justify-center">
      
        <div className="flex-1 flex flex-col justify-center items-start md:items-start text-left">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
            Seu pet merece o melhor!
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xs">
            Use nossa aplicação para comparar preços e encontrar o petshop ideal para seu melhor amigo. Praticidade, economia e carinho em um só lugar!
          </p>
        </div>
        
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white shadow rounded-lg p-6 w-full max-w-xs">
            <h1 className="text-xl font-bold mb-4 text-center text-blue-600">Buscar Melhor Petshop</h1>
            <label className="block mb-1 text-sm font-medium text-gray-700">Data:</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="mb-2 w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block mb-1 text-sm font-medium text-gray-700">Cães Pequenos:</label>
            <input
              type="number"
              value={caesPequenos}
              min={0}
              onChange={(e) => setCaesPequenos(Number(e.target.value))}
              className="mb-2 w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="block mb-1 text-sm font-medium text-gray-700">Cães Grandes:</label>
            <input
              type="number"
              value={caesGrandes}
              min={0}
              onChange={(e) => setCaesGrandes(Number(e.target.value))}
              className="mb-4 w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={buscarMelhorPetshop}
              disabled={!data || (caesPequenos === 0 && caesGrandes === 0)}
              className={`w-full py-2 rounded transition ${
                !data || (caesPequenos === 0 && caesGrandes === 0)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Buscar
            </button>
            {resultado && (
              <div className="mt-4 w-full max-w-xs">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl shadow-lg p-4 flex flex-col items-center border border-green-300">
                  <h2 className="text-lg font-bold text-green-700 mb-2">Melhor Petshop Encontrado!</h2>
                  <div className="w-full flex flex-col gap-1 mb-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Nome:</span>
                      <span className="text-gray-900">{resultado.nome}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Preço Total:</span>
                      <span className="text-green-700 font-bold">R$ {resultado.precoTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Confira as condições e horários antes de agendar!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    
      <div className="fixed bottom-20 left-4 z-50">
        <Mascote />
      </div>
    </div>
  );
};

export default Home;
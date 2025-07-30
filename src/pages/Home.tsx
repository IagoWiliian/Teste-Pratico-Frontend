import React, { useState } from "react";
import ResultadoPetshop from "../components/ResultadoPetshop";
import api from "../services/Service";

interface Resultado {
  nome: string;
  precoTotal: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState("");
  const [caesPequenos, setCaesPequenos] = useState(0);
  const [caesGrandes, setCaesGrandes] = useState(0);
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const buscarMelhorPetshop = async () => {
    try {
      const response = await api.post("/melhor-petshop", {
        data,
        caesPequenos,
        caesGrandes,
      });
      setResultado(response.data as Resultado);
    } catch (error) {
      alert("Erro ao buscar o melhor petshop.");
    }
  };

  return (
    <div className="container">
      <h1>Buscar Melhor Petshop</h1>

      <label>Data:</label>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <label>Cães Pequenos:</label>
      <input
        type="number"
        value={caesPequenos}
        onChange={(e) => setCaesPequenos(parseInt(e.target.value))}
      />

      <label>Cães Grandes:</label>
      <input
        type="number"
        value={caesGrandes}
        onChange={(e) => setCaesGrandes(parseInt(e.target.value))}
      />

      <button onClick={buscarMelhorPetshop}>Buscar</button>

      {resultado && (
        <ResultadoPetshop nome={resultado.nome} precoTotal={resultado.precoTotal} />
      )}
    </div>
  );
};

export default Home;

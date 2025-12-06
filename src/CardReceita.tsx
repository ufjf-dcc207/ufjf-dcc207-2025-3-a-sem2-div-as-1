import { useState } from "react";
import BoxAvaliacao from "./BoxAvaliacao";

type CardReceitaProps = {
  nome: string;
  ingredientes: string[];
  preparo: string;
  imagem: string;
  dificuldade: string;
  tempo: string;
};

export default function CardReceita({ nome, ingredientes, preparo, imagem, dificuldade, tempo }: CardReceitaProps) {
    const [mostrarBox, setMostrarBox] = useState(false);

    function abrirAvaliacao() {
      setMostrarBox(true);
    }

    function fecharAvaliacao() {
      setMostrarBox(false);
    }

    return (
      <li className="card-receita">
        {imagem && <img src={imagem} alt={nome} className="imagem-receita" />}

        <h3>{nome}</h3>
        <p id="extra">Dificuldade: {dificuldade} | Tempo: {tempo}</p>

        <h4>Ingredientes:</h4>
        <ul>
          {ingredientes.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h4>Modo de Preparo:</h4>
        <p>{preparo}</p>

        <button onClick={abrirAvaliacao}>Avaliar</button>

        <BoxAvaliacao estado={mostrarBox} fechar={fecharAvaliacao}/>
      </li>
    );
}

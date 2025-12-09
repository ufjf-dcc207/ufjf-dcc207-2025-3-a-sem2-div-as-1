import { useState } from "react";
import BoxAvaliacao from "./BoxAvaliacao";
import { Estrela } from "./Estrela";

type CardReceitaProps = {
  nome: string;
  ingredientes: string[];
  preparo: string;
  imagem: string;
  dificuldade: string;
  tempo: string;
};

export default function CardReceita({ nome, ingredientes, preparo, imagem, dificuldade, tempo }: CardReceitaProps) {
    const [estrela, setEstrela] = useState(0);
    const [avaliacaoEnviada, setAvaliacaoEnviada] = useState(false);
    const [mostrarBox, setMostrarBox] = useState(false);
    const [comentario, setComentario] = useState("");

    function abrirAvaliacao() {
      if(avaliacaoEnviada)
          return;
      
      setMostrarBox(true);
      document.body.classList.add("no-scroll");
    }

    function fecharAvaliacao() {
      setMostrarBox(false);
      document.body.classList.remove("no-scroll");
    }

    return (
      <li className="card-receita">
        {imagem && <img src={imagem} alt={nome} className="imagem-receita" />}

        <div className="estrela-card">
          <Estrela icone="⭐" valor={estrela}/>
        </div>

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

        <button className="botao-avaliar" onClick={abrirAvaliacao} disabled={avaliacaoEnviada}>
          Avalie esta receita!
        </button>

        <BoxAvaliacao
          key={nome}
          estado={mostrarBox}
          fechar={fecharAvaliacao}
          estrela={estrela}
          setEstrela={setEstrela}
          comentario={comentario}
          setComentario={setComentario}
          avaliacaoEnviada={avaliacaoEnviada}
          setAvaliacaoEnviada={setAvaliacaoEnviada}/>
      </li>
    );
}


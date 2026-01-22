import { useState } from "react";
import BoxAvaliacao from "./BoxAvaliacao";
import { Estrela } from "./Estrela";

type Avaliacao = {
  estrela: number;
  comentario: string;
  enviada: boolean;
};

type CardReceitaProps = {
  nome: string;
  ingredientes: string[];
  preparo: string;
  imagem: string;
  dificuldade: string;
  tempo: string;
  avaliacao?: Avaliacao;
  salvarAvaliacao: ( nome: string, estrela: number, comentario: string) => void;
};

export default function CardReceita({ nome, ingredientes, preparo, imagem, dificuldade, tempo, avaliacao, salvarAvaliacao }: CardReceitaProps) {
    const [estrela, setEstrela] = useState(0);
    const [mostrarBox, setMostrarBox] = useState(false);
    const [comentario, setComentario] = useState("");

    function abrirAvaliacao() {
      if(avaliacao?.enviada)
          return;
      
      setMostrarBox(true);
      document.body.classList.add("no-scroll");
    }

    function fecharAvaliacao() {
      setMostrarBox(false);
      document.body.classList.remove("no-scroll");
    }

    function enviarAvaliacao(){
      salvarAvaliacao(nome, estrela, comentario);
      fecharAvaliacao();
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

        <button className="botao-avaliar" onClick={abrirAvaliacao} disabled={avaliacao?.enviada}>
          Avalie esta receita!
        </button>

        <BoxAvaliacao
          estado={mostrarBox}
          fechar={fecharAvaliacao}
          estrela={estrela}
          setEstrela={setEstrela}
          comentario={comentario}
          setComentario={setComentario}
          enviar={enviarAvaliacao}
          />
      </li>
    );
}


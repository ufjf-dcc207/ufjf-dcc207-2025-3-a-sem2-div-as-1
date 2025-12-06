import { useState } from "react";
import { Estrela } from "./Estrela";
import "./BoxAvaliacao.css"

type BoxAvaliacaoProps = {
  estado: boolean;
  fechar: () => void;
}

export default function BoxAvaliacao({ estado, fechar }: BoxAvaliacaoProps){
    const [estrela, setEstrela] = useState(0);
    const [comentario, setComentario] = useState("");

    if(!estado){
        return null;
    }

    function aumentar(){
      setEstrela(Math.min(3, estrela + 1));
    }

    function diminuir(){
      setEstrela(Math.max(0, estrela - 1));
    }

    return (
      <div className="overlay">
        <div className="box">
          <p>Deixe sua avaliação!</p>

          <Estrela icone="⭐" valor={estrela}/>
          <button onClick={aumentar}>+</button>
          <button onClick={diminuir}>-</button>

          <textarea
            className="comentario"
            placeholder="O que achou desta receita?"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />

          <button onClick={fechar}>Fechar</button>
        </div>
      </div>
    )
}
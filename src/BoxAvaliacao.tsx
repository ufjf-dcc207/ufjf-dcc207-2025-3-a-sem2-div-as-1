import { useState } from "react";
import { Estrela } from "./Estrela";
import "./BoxAvaliacao.css"

type BoxAvaliacaoProps = {
  estado: boolean;
  fechar: () => void;
}

export default function BoxAvaliacao({ estado, fechar }: BoxAvaliacaoProps){
    const [estrela, setEstrela] = useState(0);

    if(!estado){
        return null;
    }

    function aumenta(){
      setEstrela(Math.min(3, estrela + 1));
    }

    return (
      <div className="overlay">
        <div className="box">
          <p>Deixe sua avaliação!</p>
          
          <Estrela icone="⭐" valor={estrela}/>
          <button onClick={aumenta}>+</button>

          <button onClick={fechar}>Fechar</button>
        </div>
      </div>
    )
}
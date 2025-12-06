import { Estrela } from "./Estrela";
import "./BoxAvaliacao.css"

type BoxAvaliacaoProps = {
  estado: boolean;
  fechar: () => void;
  estrela: number;
  setEstrela: (v: number) => void;
  comentario: string;
  setComentario: (v: string) => void;
};

export default function BoxAvaliacao({ estado, fechar, estrela, setEstrela, comentario, setComentario }: BoxAvaliacaoProps){
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
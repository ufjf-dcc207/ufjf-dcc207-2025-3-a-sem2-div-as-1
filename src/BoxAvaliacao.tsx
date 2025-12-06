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

    let corBox = "";
    let texto = "";

    if(estrela ===1){
      corBox = "#a80000ff";
      texto = "Poxa... O que você não gostou?";
    }
    else if(estrela ===2){
      corBox = "#e07b1cff"; 
      texto = "Obrigada pelo feedback! O que poderia ser feito para melhorar?"
    }
    else if(estrela===3){
      corBox = "#4CAF50"; 
      texto = "Uau! Nos conte o que mais gostou!"
    }
    else{
      corBox = "#5b21b6";
      texto = "Escreva seu comentário!"
    }
    
    return (
      <div className="overlay">
        <div className="box" style={{ backgroundColor: corBox }}>
          <p>Deixe sua avaliação!</p>

          <Estrela icone="⭐" valor={estrela}/>
          <button onClick={aumentar}>+</button>
          <button onClick={diminuir}>-</button>

          <textarea
            className="comentario"
            placeholder={texto}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />

          <button onClick={fechar}>Fechar</button>
        </div>
      </div>
    )
}
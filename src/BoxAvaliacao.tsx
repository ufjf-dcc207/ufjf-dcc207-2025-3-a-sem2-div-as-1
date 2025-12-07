import { Estrela } from "./Estrela";
import "./BoxAvaliacao.css"
import { useState } from "react";

type BoxAvaliacaoProps = {
  estado: boolean;
  fechar: () => void;
  estrela: number;
  setEstrela: (v: number) => void;
  comentario: string;
  setComentario: (v: string) => void;
};

export default function BoxAvaliacao({ estado, fechar, estrela, setEstrela, comentario, setComentario }: BoxAvaliacaoProps){  
    const [avaliacaoEnviada, setAvaliacaoEnviada] = useState(false);
    
    if(!estado){
        return null;
    }

    let situacao = "neutro";

    if(estrela === 1)
      situacao = "ruim";
      
    if(estrela === 2)
      situacao = "ok";

    if(estrela === 3)
      situacao = "bom";

    function aumentar(){
      setEstrela(Math.min(3, estrela + 1));
    }

    function diminuir(){
      setEstrela(Math.max(0, estrela - 1));
    }

    function resetar(){
      setEstrela(0);
      setComentario("");
    }

    function enviar(){
      setAvaliacaoEnviada(true);
    }

    function avaliarNovamente(){
      resetar();
      setAvaliacaoEnviada(false);
    }

    let corBox = "";
    let texto = "";

    if(estrela === 1){
      corBox = "#a80000ff";
      texto = "Poxa... O que você não gostou?";
    }

    if(estrela === 2){
      corBox = "#e07b1cff"; 
      texto = "Obrigada pelo feedback! O que poderia ser feito para melhorar?"
    }

    if(estrela === 3){
      corBox = "#4CAF50"; 
      texto = "Uau! Nos conte o que mais gostou!"
    }

    if(estrela === 0){
      corBox = "#5b21b6";
      texto = "Escreva seu comentário!"
    }
    
    return (
      <div className="overlay">
        <div className="box" style={{ backgroundColor: corBox }}>
          <p>Deixe sua avaliação!</p>

          <Estrela icone="⭐" valor={estrela}/>
          <div className="botoesEstrela">
            <button onClick={diminuir}>-</button>
            <button onClick={aumentar}>+</button>
          </div>
          
          <textarea
            className="comentario"
            placeholder={texto}
            value={comentario}
            disabled={avaliacaoEnviada}
            onChange={(e) => setComentario(e.target.value)}
          />
         {avaliacaoEnviada ? (
            <>
              <p className="mensagem-agradecimento">Obrigada pela avaliação! 💜</p>
              <button onClick={avaliarNovamente}>Avaliar novamente</button>
              <button onClick={() => {
                setAvaliacaoEnviada(false);
                fechar();
              }}>Fechar</button>
            </>
          ) : (
            <>
              <button onClick={enviar}>Enviar comentário</button>
              <button onClick={fechar}>Fechar</button>
            </>
          )}
        </div>
      </div>
    )
}
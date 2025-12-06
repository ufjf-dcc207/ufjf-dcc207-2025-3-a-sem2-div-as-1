import "./BoxAvaliacao.css"
type BoxAvaliacaoProps = {
    estado: boolean;
    fechar: () => void;
}

export default function BoxAvaliacao({ estado, fechar }:BoxAvaliacaoProps){
    if(!estado){
        return null;
    }

    return (
    <div className="overlay">
      <div className="box">
        <p>Box</p>
        <button onClick={fechar}>Fechar</button>
      </div>
    </div>
  )
}
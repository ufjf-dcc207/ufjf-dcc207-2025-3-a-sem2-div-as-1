type CardReceitaProps = {
  nome: string;
  ingredientes: string[];
  preparo: string;
  imagem: string;
  dificuldade: string;
  tempo: string;
};



export default function CardReceita({ nome, ingredientes, preparo, imagem, dificuldade, tempo }: CardReceitaProps) {
  
  function avaliacao(){

  }
  
  return (
    <li className="card-receita">
      {imagem && <img src={imagem} alt={nome} className="imagem-receita" />}

      <h3>{nome}</h3>

      <h4>Ingredientes:</h4>
      <ul>
        {ingredientes.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h4>Modo de Preparo:</h4>
      <p>{preparo}</p>
      <p id="extra">Dificuldade: {dificuldade} | Tempo: {tempo}</p>
      <button onClick={avaliacao}>Avaliar</button>
    </li>
  );
}

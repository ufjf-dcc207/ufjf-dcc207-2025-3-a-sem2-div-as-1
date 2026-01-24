import json from "./data.json"
import LivroReceitas from "./LivroReceitas";
import "./App.css"
import { useState } from "react";

const data = json as LivroReceitas;

export type Avaliacao = {
  estrela: number;
  comentario: string;
  enviada: boolean;
}

export type LivroReceitas = {
    nomeLivro: string;
    categoria: Array<Categorias>;
}

type Categorias = {
    nomeCategoria: string;
    receita: Array<CardReceita>;
}

type CardReceita = {
    nomeReceita: string;
    ingredientes: Array<string>;
    preparo: string;
    imagem: string;
    dificuldade: string;
    tempo: string;
}

function App() {
  const [avaliacoes, setAvaliacoes] = useState<Record<string, Avaliacao>>({});
  function salvarAvaliacao(nomeReceita: string, estrela: number, comentario: string){
    setAvaliacoes((prev) => ({
      ...prev,
      [nomeReceita]: {
        estrela,
        comentario,
        enviada: true,
      },
    }));
  }

  return (
    <div>
      <h1>{data.nomeLivro}</h1>
      <LivroReceitas 
        livro={data}
        avaliacoes={avaliacoes}
        salvarAvaliacao={salvarAvaliacao}
        />
    </div>
  )
}

export default App

import type { LivroReceitas } from "./App.tsx"
import "./LivroReceitas.css"
import CardReceita from "./CardReceita";
import { useState } from "react";

type LivroReceitasProps = {
    livro: LivroReceitas;
}

type Avaliacao = {
  estrela: number;
  comentario: string;
  enviada: boolean;
};

export default function LivroReceitas({livro}: LivroReceitasProps) {
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
        <div className="livro-receitas">
            {livro.categoria.map((c) => (<div key={c.nomeCategoria}><h2>{c.nomeCategoria}</h2>
            
          <ul>
            {c.receita.map((r) => (
              <CardReceita 
                key={r.nomeReceita}
                nome={r.nomeReceita}
                ingredientes={r.ingredientes}
                preparo={r.preparo}
                imagem={r.imagem}
                dificuldade={r.dificuldade}
                tempo={r.tempo}
                avaliacao={avaliacoes[r.nomeReceita]}
                salvarAvaliacao={salvarAvaliacao}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
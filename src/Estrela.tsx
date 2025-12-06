type EstrelaProps = {
    icone: string;
    valor: number;
}

export function Estrela({ icone, valor }: EstrelaProps){
    return (
        <div className="estrela">
            {icone.repeat(valor)}
            <span className="desabilitado">{
            icone.repeat(3 - valor)}</span>
    </div>)
}
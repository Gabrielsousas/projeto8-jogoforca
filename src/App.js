import { useState, useRef } from "react";
import Letras from "./Letras";
import Jogo from "./Jogo";
import palavras from "./palavras";


export default function App() {
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [iniciarJogo, setIniciarJogo] = useState(false);
  const [erros, setErros] = useState(0);

  const jogoRef = useRef(null);

  function handleLetraClick(letra) {
    if (!letrasClicadas.includes(letra)) {
      setLetrasClicadas([...letrasClicadas, letra]);
      if (!palavraSorteada.includes(letra)) {
        setErros(erros + 1);
        console.log(erros);
      }
    }}
  return (
    <div>
      <Letras
        letrasClicadas={letrasClicadas}
        onLetraClick={handleLetraClick}
        iniciarJogo={iniciarJogo}
      />
      <Jogo
        ref={jogoRef}
        palavraSorteada={palavraSorteada}
        setPalavraSorteada={setPalavraSorteada}
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
        setIniciarJogo={setIniciarJogo}
        iniciarJogo={iniciarJogo}
        erros={erros}
      />
    </div>
    
  );
}

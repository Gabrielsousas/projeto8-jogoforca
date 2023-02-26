import { useState } from "react";
import palavras from "./palavras";

export default function Jogo({ palavraSorteada, setPalavraSorteada, letrasClicadas }) {
  const [palavraEscondida, setPalavraEscondida] = useState("");

  function verificarLetra(letra) {
    const novaPalavra = palavraSorteada
      .split("")
      .map((letraOriginal, index) =>
        letraOriginal === letra ? letra : palavraEscondida[index]
      )
      .join("");
    setPalavraEscondida(novaPalavra);
  }

  function sortearPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
  }

  function handleEscolherPalavraClick() {
    const palavra = sortearPalavra();
    setPalavraSorteada(palavra);
    setPalavraEscondida(palavra.replace(/./g, "_"));
  }

  return (
    <div>
      <button onClick={handleEscolherPalavraClick}>Escolher Palavra</button>
      {palavraEscondida && (
        <div>
          {palavraEscondida.split("").map((letra, index) => (
            <span key={index}>{letra === " " ? " " : letrasClicadas.includes(palavraSorteada[index]) ? palavraSorteada[index] : "_"}</span>
          ))}
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import palavras from "./palavras";
import forca0 from "./imagens/assets/forca0.png"
import forca1 from "./imagens/assets/forca1.png"
import forca2 from "./imagens/assets/forca2.png"
import forca3 from "./imagens/assets/forca3.png"
import forca4 from "./imagens/assets/forca4.png"
import forca5 from "./imagens/assets/forca5.png"
import forca6 from "./imagens/assets/forca6.png"
   
export default function Jogo({ palavraSorteada, setPalavraSorteada, letrasClicadas, setLetrasClicadas, setIniciarJogo, iniciarJogo, erros}) {
  const [palavraEscondida, setPalavraEscondida, ] = useState("");

  const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];


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

  function escolherPalavra() {
    setIniciarJogo(true)
    console.log(iniciarJogo)
    setLetrasClicadas([])
    const palavra = sortearPalavra();
    setPalavraSorteada(palavra);
    setPalavraEscondida(palavra.replace(/./g, "_"))
  }

  return (
    <div>
  {erros < imagensForca.length ? (
  <img data-test="game-image" src={imagensForca[erros]} />
) : (
console.log("voce perdeu")
)}

      <button onClick={escolherPalavra} data-test="choose-word">Escolher Palavra</button>
      {palavraEscondida && (
        <div data-test="word">
          {palavraEscondida.split("").map((letra, index) => (
            <span key={index}>{letra === " " ? " " : letrasClicadas.includes(palavraSorteada[index]) ? palavraSorteada[index] : "_"}</span>
          ))}
        </div>
      )}
    </div>
  );
}
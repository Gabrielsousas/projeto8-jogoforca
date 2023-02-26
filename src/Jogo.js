import palavras from "./palavras";
export default function Jogo({palavraSorteada,setPalavraSorteada}) {
    return (
        <div>
          <button onClick={() => setPalavraSorteada(sorteiaPalavra(palavras))}>
            Escolher Palavra
          </button>
          {palavraSorteada && (
            <div>
              {palavraSorteada.split("").map((letra, index) => (
                <span key={index}>{letra === " " ? " " : "_"}</span>
              ))}
            </div>
          )}
        </div>
      );
    
}

function sorteiaPalavra(palavras) {
    const indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
  }
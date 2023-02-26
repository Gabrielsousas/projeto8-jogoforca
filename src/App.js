import { useState } from "react";
import Letras from "./Letras";
import Jogo from "./Jogo";
import palavras from "./palavras";

export default function App() {
  const [palavraSorteada, setPalavraSorteada] = useState("");
  return (
    <div>
      <Letras></Letras>
      <Jogo
        palavraSorteada={palavraSorteada}
        setPalavraSorteada={setPalavraSorteada}
      ></Jogo>
    </div>
  );
}

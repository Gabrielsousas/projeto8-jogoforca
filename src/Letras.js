import React from "react";

export default function Letras({ letrasClicadas, onLetraClick, iniciarJogo }) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  return (
    <div>
      {alfabeto.map((letra) => (
        <button key={letra} onClick={() => onLetraClick(letra)} disabled={letrasClicadas.includes(letra) || iniciarJogo === false}>
          {letra}
        </button>
      ))}
    </div>
  );
}

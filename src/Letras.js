import React from "react";

export default function Letras({ letrasClicadas, onLetraClick }) {
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
      {alfabeto.map((a) => (
        <button key={a} onClick={() => onLetraClick(a)} disabled={letrasClicadas.includes(a)}>
          {a}
        </button>
      ))}
    </div>
  );
}

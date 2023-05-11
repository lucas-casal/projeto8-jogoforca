//imagem da forca
//botao de iniciar
import { useState } from "react";
import Letras from "./Letras";
import palavras from "./palavras";

export default function Jogo(){

    //palavra do jogo
    const randomNmbr = Math.floor(Math.random() * 20)
    const word = palavras[randomNmbr];

    function ChosenWord() {
        
        return word;
    }

    return (
        <>
        <img id="hanging" src="./assets/forca0.png" ></img>
        <button id="start-btn" onClick={ChosenWord}>Escolher Palavra</button>
        </>
    )
}
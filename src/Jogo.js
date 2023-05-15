//imagem da forca
//botao de iniciar
import { useState } from "react";
import lettersSelected from "./Letras";
import palavras from "./palavras";


export default function Jogo(props){ 



    return (
        <>
        <img id="hanging" src={props.img} data-test="game-image"></img>
        <button id="start-btn" onClick={props.StartBtn} data-test="choose-word">Escolher Palavra</button>
        <span id="word-space" className={props.wordClass} data-test="word">{props.print}</span>
        </>
    )
}


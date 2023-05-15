//imagem da forca
//botao de iniciar
import { useState } from "react";
import lettersSelected from "./Letras";
import palavras from "./palavras";


export default function Jogo(props){ 



    return (
        <>
        <img id="hanging" src={props.img} ></img>
        <button id="start-btn" onClick={props.StartBtn}>Escolher Palavra</button>
        <span id="word-space" className={props.wordClass}>{props.print}</span>
        </>
    )
}


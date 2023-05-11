//imagem da forca
//botao de iniciar
import { useState } from "react";
import {Letras, lettersSelected} from "./Letras";
import palavras from "./palavras";
let printed = [];
export default function Jogo(){
    let [space, setSpace] = useState("")

    //palavra do jogo
    const randomNmbr = Math.floor(Math.random() * 20)
    const word = palavras[randomNmbr];

    function ChosenWord() {
        console.log(word.length);
        for (let i=0; i<word.length; i++){
            printed.push(" _ " );
        }
        console.log(lettersSelected)

        setSpace(wordSpace)
        return word;
        
    }

    function wordSpace(){

       return printed.map((x)=>{return x})
    }

    return (
        <>
        <img id="hanging" src="./assets/forca0.png" ></img>
        <button id="start-btn" onClick={ChosenWord}>Escolher Palavra</button>
        <span id="word-space">{space}</span>
        </>
    )
}
//conjunto de botões com as letras
import React from "react";
import { useState } from "react";


export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let copy=[props.selectedLetters];


    return(
    <>
        <div id="letters-container">
        {alfabeto.map((x) =>     
        
        <button id={x} key={x} onClick={props.onClick} className={props.Class}  disabled={props.begin || props.selectedLetters.includes(x)}>
        {x.toUpperCase()}
        </button>)}
        
        </div>
    </>
    )
}


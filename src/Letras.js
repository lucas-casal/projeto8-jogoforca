//conjunto de botões com as letras
import { useState } from "react"

export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let [selected, setSelected] = useState(false)

    return(
        <div id="letters-container">
        {alfabeto.map((letter)=> {
            
            function GuessLetter() {
                console.log(letter.toUpperCase())
                const clicada = document.getElementById(letter)
                clicada.setAttribute("disabled", true)
                clicada.className += " selected"
            }

            return (
            <button id={letter} key={letter} onClick={() => {return (GuessLetter())}} className="letter-btn">
            {letter.toUpperCase()}
            </button>
            )}
        )
        }
      </div>
    )

}



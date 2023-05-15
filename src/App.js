import React from 'react';
import { useState } from 'react';
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"

let diferenca = 0;


export default function App() {

    const lettersSelected = [];
    let [selectedLetters, setSelectedLetters] = useState(lettersSelected);
    let [certas, setCertas] = useState([])

    let [print, setPrint] = useState([])
    const [Class, setClass] = useState("letter-btn");
    let randomNmbr = Math.floor(Math.random() * 20)

    const newWord = [];
    let [word, setWord] = useState(palavras[randomNmbr])
    let wordClass = ""
    let array = []

    const [begin, setBegin] = useState(true);

    let [fails, setFails] = useState("");

    let [img, setImg] = useState("./assets/forca0.png")


    function StartBtn() {
        diferenca = 0;
        let certas = [];
        setImg("./assets/forca0.png")
        setSelectedLetters([])
        setBegin(false)
        newWord.push(palavras[randomNmbr])
        setFails(0);
        setPrint([]);


        printStartWord(newWord[0])

    }

    function printStartWord(palavra){
        for (let i = 0; i < palavra.length; i++) {
            array.push(" _ ");
        }

        setPrint(array)
        console.log(palavra)
        setWord(newWord[0])
    }
    
    function selectLetter(x) {
        const letter = x.target.id;
        const novoArray = [...selectedLetters, letter];
        setSelectedLetters(novoArray);
        checkingLetter(letter)
    }
    
    function checkingLetter(x){
        console.log(word)
        let fail = 0;
        
        for (let i=0; i<word.length; i++){
            
            const troca = word[i] === x;
            console.log(troca)

            if (troca){
                print.splice(i, 1, x) 
                const letter = x;
                const novoArray = [...certas, x];
                setCertas(novoArray)
            } else{
                fail++
            }


        }
        console.log(fail)
        
        if (fail === word.length){
            
            diferenca++
        }
        console.log(diferenca)
        errors(diferenca);
    }

    console.log(selectedLetters);
    console.log(certas)
    
    const certasSemRepetir = certas.filter((este, i) => {
        return certas.indexOf(este) === i;});

    function errors(diferenca){
    console.log(diferenca)

    if (diferenca === 1){
        setImg("./assets/forca1.png")
    } else if (diferenca === 2){
        setImg("./assets/forca2.png")
    } else if (diferenca === 3){
        setImg("./assets/forca3.png")
    } else if (diferenca === 4){
        setImg("./assets/forca4.png")
    } else if (diferenca === 5){
        setImg("./assets/forca5.png")
    } else if (diferenca === 6){
        setImg("./assets/forca6.png")
    }

}


if (print.join("") === word){
        wordClass = "correct"
        
    } else if (diferenca === 6){
    wordClass = "incorrect"
    }



    return (
        <>
            <Jogo StartBtn={StartBtn} img={img} wordClass={wordClass} print={diferenca<6 ? print : word} />
            <Letras Class={Class} selectedLetters={selectedLetters} onClick={selectLetter} begin={begin} />
        </>
    )
}



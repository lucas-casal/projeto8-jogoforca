import React from 'react';
import { useState } from 'react';
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"
import Chute from './Chute';

let diferenca = 0;


export default function App() {
    const [valor, setValor] = useState('');
    const lettersSelected = [];
    let [selectedLetters, setSelectedLetters] = useState(lettersSelected);
    let [end, setEnd] = useState(false);
    let [print, setPrint] = useState([])
    const [Class, setClass] = useState("letter-btn");
    let randomNmbr = Math.floor(Math.random() * 188)

    const newWord = [];
    let [word, setWord] = useState(palavras[randomNmbr])
    let [wordClass, setWordClass] = useState("")
    let array = []

    const [begin, setBegin] = useState(true);

    let [fails, setFails] = useState("");

    let [img, setImg] = useState("./assets/forca0.png")
    let avaliacao = "";
    let fim = false;

    function StartBtn() {
        fim = false;
        diferenca = 0;
        setImg("./assets/forca0.png")
        setSelectedLetters([])
        setBegin(false)
        setWordClass("")
        setEnd(false)
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
        fim = true;
    } else if (diferenca === 6){
        wordClass = "incorrect"
        fim = true
    }

    const handleChange = (event) => {
        setValor(event.target.value);
    };



    function sendAnswer(){
        setEnd(true)
        console.log(valor)
        console.log(word)
        if (valor === word){
            avaliacao = "correct"
        } else {
            avaliacao = "incorrect"
            setImg("./assets/forca6.png")
        }
        setWordClass(avaliacao)
        setValor("")
    }
    
    if (end){
        avaliacao = word;
    } else if (diferenca<6){
        avaliacao = print;
    } else{
        avaliacao = word
    }
    
    console.log(end)
    return (
        <>
            <Jogo StartBtn={StartBtn} img={img} wordClass={wordClass} print={avaliacao} />
            <Letras Class={Class} selectedLetters={selectedLetters} onClick={selectLetter} begin={begin ? true: fim ? true : end ? true : false} />
            <Chute valor={valor} handleChange={handleChange} onClick={sendAnswer} end={begin ? true : end ? true: fim ? true : false}/>
        </>
    )
}



import React from "react";
import { SetState } from "react";

export default function Chute(props){



    return (
        <div id="bonus">
            <span id="chute-phrase">Já sei a palavra</span>
            <input id="answer" type="text" value={props.valor} onChange={props.handleChange} disabled={props.end} data-test="guess-input"></input>
            <button id="send-answer" onClick={props.onClick} disabled={props.end} data-test="guess-button">Chutar</button>
        </div>
    )
}
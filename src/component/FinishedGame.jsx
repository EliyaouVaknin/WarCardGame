import React from 'react'
import './Styles/FinishedGame.css'

export default function FinishedGame(props) {

    function exitGame(){
        props.changePage("home");
    }

    function playAgain(){
        props.changePage("game");
    }

    return (
        <div id='finishedCard'>
            <h1 id='winnerTitle'>The Winner Is {props.winner} {props.winner == "Computer" ? ':(' : ':)'}</h1>
            <button className='button' onClick={playAgain}>Fight Again!</button>
            <button className='button' onClick={exitGame}>Exit Game</button>
        </div>
    )
}

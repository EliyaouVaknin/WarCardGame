import React,{useState} from 'react'
import './Styles/Game.css'

export default function Game(props) {

    //Global Variables
    var shuffle = require('shuffle-array');
    var deckOfCards=[];
    var cardsOfComputer=[];
    var cardsOfPlayer=[];

    //Hooks
    const [ThisCardComputer, setThisCardComputer] = useState('');
    const [ThisCardPlayer, setThisCardPlayer] = useState('');
    const [Round, setRound] = useState(0);
    const [PlayerScore, setPlayerScore] = useState(0);
    const [ComputerScore, setComputerScore] = useState(0);
    const [Flag, setFlag] = useState(true);
    const [Button, setButton] = useState("Start!");
    const [CardsOfComputer, setCardsOfComputer] = useState([]);
    const [CardsOfPlayer, setCardsOfPlayer] = useState([]);
    const [ImgCardPlayer, setImgCardPlayer] = useState([]);
    const [ImgCardComputer, setImgCardComputer] = useState([]);  

    //Functions
    function initial(){
      if(Flag == true){
        GenerateDeck();
        shuffle(deckOfCards);
        Distributer();
        setFlag(!Flag);
      }
    }
    //////////////////////////////////////////////////////////////////////////
     function GenerateDeck(){
        let thisCard = 2;
        for(let i=0; i<13; i++){
          for(let j=0; j<4; j++){
            deckOfCards.push(thisCard);
          }
          thisCard++;
        }
      }

      function Distributer(){
        let RandomIndex = 0 ;
        let max = 52;
        for(let i=0; i<26; i++){
          RandomIndex = Math.floor(Math.random() * max);
          if(deckOfCards[RandomIndex] != null){
            cardsOfComputer.push(deckOfCards[RandomIndex]);
            delete deckOfCards[RandomIndex];
            } else {
            i--;
          }
        }
        for(let i=0; i<52; i++){
          if(deckOfCards[i] != null){  
            cardsOfPlayer.push(deckOfCards[i]); 
          }
        }
        setCardsOfComputer(cardsOfComputer);
        setCardsOfPlayer(cardsOfPlayer);
      }

      //////////////////////////////////////////////////////////////////////////
      function CheckWhoIsGreater(){
        if(ThisCardPlayer > ThisCardComputer){
          setPlayerScore(PlayerScore + 1);
        } else if(ThisCardPlayer < ThisCardComputer){
          setComputerScore(ComputerScore + 1);
        }
      }

      function CheckWinner(){
        if(PlayerScore > ComputerScore){
          props.SaveWinner(props.player);
        } else if(PlayerScore < ComputerScore){
          props.SaveWinner("Computer");

        } else {
          props.SaveWinner("Draw");
        }
      }

      function ChangeCards(){
        setButton("Again!");
        setThisCardComputer(CardsOfComputer[0,Round]);
        setThisCardPlayer(CardsOfPlayer[0,Round]);
        CheckWhoIsGreater();
        setRound(Round + 1);
        if (Round == 25)
        {
          setButton("Finish");
        }
        if (Round == 26){
          ChangeScreen();
        }
      }

      // function ImgCardShow(Computer, Player){
      //   if(Computer > 10){
      //     switch (Computer){
      //       case 11: setImgCardComputer('J');
      //       case 12: setImgCardComputer('Q');
      //       case 13: setImgCardComputer('K');
      //       case 14: setImgCardComputer('A');
      //     } 
      //   } 
      //   if(Player > 10){
      //     switch (Player){
      //       case 11: setImgCardComputer('J');
      //       case 12: setImgCardComputer('Q');
      //       case 13: setImgCardComputer('K');
      //       case 14: setImgCardComputer('A');
      //     } 
      //   }
      // }

      // function CardComp(){
      //   if (ThisCardComputer < 10 ){
      //     return ThisCardComputer
      //   } else {
      //     ImgCardShow(ThisCardComputer,ThisCardPlayer);
      //     return ImgCardComputer;
      //   }
      // }

      // function CardPlayer(){
      //   if (ThisCardPlayer < 10 ){
      //     return ThisCardPlayer
      //   } else {
      //     ImgCardShow(ThisCardComputer,ThisCardPlayer);
      //     return ImgCardPlayer;
      //   }
      // }


      
      /////////////////////////////////////////////////////////////////////////
      function ChangeScreen(){
        CheckWinner();
        props.changePage("Finished");
      }

      //onLoad
      initial();

    return (
        <div id='Board'>
          <h1>Round {Round}</h1>
          <h1>Computer</h1>
          <div className='card'>
          {ThisCardComputer}
          </div>
          <div className='card'>
          {ThisCardPlayer}
          </div>
          <h1>{props.player}</h1>
          <h2>Computer Score: {ComputerScore} <br/> {props.player}'s Score: {PlayerScore}</h2>
          <button className='button' onClick={ChangeCards}>{Button}</button>
        </div>
    )
}

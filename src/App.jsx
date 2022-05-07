import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home';
import Game from './component/Game';
import FinishedGame from './component/FinishedGame';
import './App.css';

function App() {
  //Hooks
  const [PlayerName, setPlayerName] = useState('');
  const [Screen, setScreen] = useState('home');
  const [Winner, setWinner] = useState('');
  const [Players,setPlayers] = useState([]);

  //User Function 
  const SavePlayer = (N, V, L, G) => {
    if(Players.find(element => element.Name == N)){
      setPlayerName(N)
    } else {
      setPlayerName(N);
      setPlayers([{ Name: N, Victories: V, Losses: L, Games: G }, ...Players ]);
    }
  }

  function SaveWinner(winner){
    setWinner(winner);
    var e = Players.find(element => element.Name == PlayerName);
    if(winner == 'Computer'){
      e.Losses = e.Losses + 1;
      e.Games = e.Games + 1;
    } else if (winner == e.Name){
      e.Victories = e.Victories + 1; 
      e.Games = e.Games + 1;
    } else {
      e.Games = e.Games + 1;
    }
  }

  //System Functions
  const changePage = (switchTo) => {
    setScreen(switchTo);
  }

  const currentPage = (page) => {
    if(page == "home") {
      return <Home SavePlayer={SavePlayer} changePage={changePage} Players={Players} player={PlayerName} />
    } else if(page == "game") {
      return <Game player={PlayerName} changePage={changePage} SaveWinner={SaveWinner} Players={Players} />
    } else {
      return <FinishedGame winner={Winner} changePage={changePage}  />
    }
  }

  return (
    <div className="App">
      {currentPage(Screen)}
    </div>
  );
}

export default App;

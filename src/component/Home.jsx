import React, {useState} from 'react'
import PlayersNames from './PlayersNames';
import './Styles/Home.css'
import '../App.css'

export default function Home(props) {
    //Hooks
    const [Name, setName] = useState('');
    const [flag, setflag] = useState(false);

    //User Functions
    function CheckPlayerName(e){
        if(e.target.value.length > 0){
            setName(e.target.value);
        } else {
            setName('');
         }
    }

    function SavePlayer(){
        if (Name != ''){
            props.SavePlayer(Name, 0, 0 ,0);
            ChangeScreen();
            } else {
            alert ("Enter Your Name Please :)")
        }
    }

    //System Function
    function ChangeScreen(){
        setflag(!flag);
        if(flag == false){
            props.changePage("home");
        } else {
            props.changePage("game");
        }
    }

    return (
        <div>
            <div id='LoginCard'>  
                <h1>Ready For Fight?</h1>                       
                <input type="text" onChange={CheckPlayerName} class="input-field" placeholder="Enter Your Name:"/>
                <button type="submit" class="button" onClick={SavePlayer}>Start</button>
                <table class="table">
                    <tr>
                        <td>Name</td>
                        <td>Victories</td>
                        <td>Losses</td>
                        <td>Games</td>
                    </tr>
                </table>
                {props.Players.map( p => {
                return <PlayersNames Name={p.Name} Victories={p.Victories} Losses={p.Losses} Games={p. Games} />
            })}   
            </div>
        </div>
    )
}

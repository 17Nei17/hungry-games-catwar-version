import './App.css';
import React, { useState } from 'react';
import UserList from './users/UserList';
import Game from './game/Game';
import End from './end/End';


function App() {
  const [appState, setAppState] = useState('settings');
  const [usersList, setUsersList] = useState([]);
  const [helpText, setHelpText] = useState("");

  function startGame(list) {
    setUsersList(list);
    // setUsersList([
    //   {
    //     "name": "Сельдерей",
    //     "isUsed": false,
    //     "img": "",
    //     "gender": "",
    //     "isAlive": true,
    //     "statusText": "Осматривается",
    //     "isfinallyMovedFromGame": false
    //   },
    //   {
    //     "name": "Умка",
    //     "isUsed": false,
    //     "img": "",
    //     "gender": "",
    //     "isAlive": true,
    //     "statusText": "Осматривается",
    //     "isfinallyMovedFromGame": false
    //   },
    //   {
    //     "name": "Chas_mem",
    //     "isUsed": false,
    //     "img": "",
    //     "gender": "",
    //     "isAlive": true,
    //     "statusText": "Осматривается",
    //     "isfinallyMovedFromGame": false
    //   },
    //   {
    //     "name": "Echpochmak",
    //     "isUsed": false,
    //     "img": "",
    //     "gender": "",
    //     "isAlive": true,
    //     "statusText": "Осматривается",
    //     "isfinallyMovedFromGame": false
    //   },
    //   {
    //     "name": "Нова",
    //     "isUsed": false,
    //     "img": "",
    //     "gender": "",
    //     "isAlive": true,
    //     "statusText": "Осматривается",
    //     "isfinallyMovedFromGame": false
    //   },
    //   {
    //     "name": "Тархун",
    //     "isUsed": false,
    //     "img": "",
    //     "gender": "",
    //     "isAlive": true,
    //     "statusText": "Осматривается",
    //     "isfinallyMovedFromGame": false
    //   }
    // ]);
    if (list.length > 1) {
      setAppState('game');
      setHelpText('');
    } else {
      setHelpText("Нужно добавить как минимум 2 персонажа");
    }
  }
  function endGame() {
    setHelpText('');
    setAppState('end')
  }

  return (
    <div className="App">
      <div class="info-text">{helpText}</div>
      {appState === 'settings' && <UserList startGame={startGame} setHelpText={setHelpText} />}
      {appState === 'game' && <Game usersList={usersList} endGame={endGame} setUsersList={setUsersList}/>}
      {appState === 'end' && <End usersList={usersList} />}
    </div>
  );
}

export default App;

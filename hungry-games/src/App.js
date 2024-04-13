import './App.css';
import React, { useState } from 'react';
import UserList from './users/UserList';
import Game from './game/Game';
import End from './end/End';


function App() {
  const [appState, setAppState] = useState('settings');
  const [usersList, setUsersList] = useState([]);

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
    setAppState('game');
  }
  function endGame(object) {
    setAppState('end')
  }

  return (
    <div className="App">
      {appState === 'settings' && <UserList startGame={startGame} />}
      {appState === 'game' && <Game usersList={usersList} endGame={endGame} setUsersList={setUsersList} />}
      {appState === 'end' && <End usersList={usersList}/>}
    </div>
  );
}

export default App;

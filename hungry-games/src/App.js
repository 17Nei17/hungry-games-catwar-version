import './App.css';
import React, { useState, useEffect } from 'react';
import UserList from './users/UserList';
import Game from './game/Game';
import End from './end/End';


function App() {
  const [appState, setAppState] = useState('settings');
  const [usersList, setUsersList] = useState([]);

  function startGame(list) {
    setUsersList(list);
    setAppState('game');
  }
  function endGame(list) {
    setAppState('end')
  }

  return (
    <div className="App">
      {appState === 'settings' && <UserList startGame={startGame} />}
      {appState === 'game' && <Game usersList={usersList} endGame={endGame} setUsersList={setUsersList} />}
      {appState === 'end' && <End />}
    </div>
  );
}

export default App;

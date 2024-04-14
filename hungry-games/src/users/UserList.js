import UserItem from "./UserItem"
import AddUserForm from "./AddUserForm"
import React, { useState, useEffect } from 'react';
// let obj = { img: 'src', name: 'str', gender: 'srt', friend: 'name' }

function UserList(props) {
  const [users, setUsers] = useState(props.usersList);
  const [isShowForm, setShowForm] = useState(false);
  useEffect(() => {

  });

  function renderUsers() {
    return users.map((user) =>
      <UserItem userData={user} users={users} removeUserByIndex={removeUserByIndex}></UserItem>
    );
  }

  function removeUserByIndex(index) {
    const newArray = [...users];
    newArray.splice(index, 1);
    setUsers(newArray);
  }

  function clearUserList() {
    setUsers([]);
  }


  function addUser(userObject) {
    let checkName = users.filter((user) => user.name == userObject.name);
    if (checkName.length > 0) {
      props.setHelpText("Персонаж с таким именем уже есть");
    } else {
      setUsers((prev) => [
        ...prev,
        {
          'name': userObject.name,
          'isUsed': false,
          'img': userObject.img,
          'gender': userObject.gender,
          'friend': userObject.friend,
          'isAlive': true,
          'statusText': "Осматривается",
          'isfinallyMovedFromGame': false,
        }
      ]);
      // setShowForm(false);
      props.setHelpText("");
    }
  }

  function settings() {
    setShowForm(false);
  }

  function startGame(users) {
    props.startGame(users);
  }


  return (
    <div>
      {isShowForm && <AddUserForm addUser={addUser} settings={settings}></AddUserForm>}
      <div className="userlist">
        {renderUsers()}
      </div>
      {!isShowForm && <button onClick={() => { setShowForm(true) }}>Добавить участника</button>}
      {!isShowForm && <button onClick={() => { clearUserList() }}>Удалить всех</button>}
      <button onClick={() => { startGame(users) }}>Начать игру</button>
      <button className="about-button" onClick={() => { props.setAppState("about"); props.setHelpText('') }}>Информация</button>
    </div>

  );
}

export default UserList;
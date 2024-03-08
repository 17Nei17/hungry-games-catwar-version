import UserItem from "./UserItem"
import AddUserForm from "./AddUserForm"
import React, { useState, useEffect } from 'react';
// let obj = { img: 'src', name: 'str', gender: 'srt', friend: 'name' }

function UserList() {
  const [users, setUsers] = useState([]);
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
    setUsers((prev) => [
      ...prev,
      { 'name': userObject.name, 'img': userObject.img, 'gender': userObject.gender, 'friend': userObject.friend }
    ]);
    setShowForm(false);
  }


  return (
    <div>
      <div>Список участников</div>
      <div className="userlist">
        {renderUsers()}
      </div>
      {!isShowForm && <button onClick={() => { setShowForm(true) }}>Добавить участника</button>}
      {!isShowForm && <button onClick={() => { clearUserList() }}>Удалить всех</button>}
      {isShowForm && <AddUserForm addUser={addUser}></AddUserForm>}
    </div>

  );
}

export default UserList;
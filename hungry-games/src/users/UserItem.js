import React from 'react';


let obj = { img: 'src', name: 'str', gender: 'srt', friend: 'name' }

function UserItem(props) {
    function deleteUser(deletedName) {
        props.users.forEach((user, index) => {
            if (user.name === deletedName) {
                console.log(user);
                props.removeUserByIndex(index);
            }
        });


    }
    return (
        <div className="userItem">
            <div className="userName">{props.userData.name}</div>
            <img className="userImage" src={props.userData.img} />
            <div className="userGender">{props.userData.gender}</div>
            <div className="userFriend">{props.userData.friend}</div>
            <button onClick={() => { deleteUser(props.userData.name) }}>Удалить участника</button>
        </div>
    );
}

export default UserItem;
import React, { useState, useEffect } from 'react';
import IdleAction from "./action/idleAction"
import suicideAction from "./action/suicideAction"
import dayStatusList from "./action/dayStatusList"
import friendlyAction from "./action/friendlyAction"

function Game(props) {
    const [stateBattle, setStateBattle] = useState({ day: 1, action: 'Начало первого дня', time: "День" });


    // function killUsers() {
    //     const newArray = [...props.usersList];

    //     props.usersList.forEach((user, index) => {
    //         if (newArray[index]) {
    //             if (newArray[index].isAlive === false) {
    //                 newArray.splice(index, 1);
    //             }
    //         }
    //     })
    //     props.setUsersList(newArray);
    // }


    function addStatuses() {
        const newArray = [...props.usersList];
        props.usersList.forEach((user, index) => {
            if (newArray[index].isAlive) {
                let newInfo = setStatus(index);
                newArray[index].statusText = newInfo.text;
                newArray[index].isAlive = newInfo.isAlive;
            }
        })
        props.setUsersList(newArray);
    }

    function setStatus(userIndex) {
        // let action = Math.floor(Math.random() * 4) // шестерка это количество файлов с экшенами

        let action = Math.floor(Math.random() * 3);
        switch (action) {
            case 0:
                // suicide
                let suicideStatusNumber = Math.floor(Math.random() * suicideAction.length);
                return { text: suicideAction[suicideStatusNumber].maleText, isAlive: false };

            case 1:
                // idle
                let idleStatusNumber = Math.floor(Math.random() * IdleAction.length);
                return { text: IdleAction[idleStatusNumber].maleText, isAlive: true };

            case 2:
                // friendly 
                let friendlyStatusNumber = Math.floor(Math.random() * 1);
                return { text: friendlyAction(friendlyStatusNumber, "Умка", "Нова"), isAlive: true };
            // case 3:
            default:

        }
    }


    function nextDay() {
        let statusNumber = Math.floor(Math.random() * dayStatusList.length);
        let newDay = stateBattle.time === "Ночь" ? stateBattle.day + 1 : stateBattle.day;
        let newTime = stateBattle.time === "Ночь" ? 'День' : "Ночь";
        setStateBattle({ day: newDay, time: newTime, action: dayStatusList[statusNumber].status });

        addStatuses();
    }

    function renderParty() {
        return props.usersList.map((user, index) =>
            <div className="userItem">
                <div className="userName">{user.name}</div>
                <img className="userImage" src={user.img} />
                <div className="userName">{user.isAlive ? 'живой' : 'мертв'}</div>
                <div>{user.statusText}</div>
                {/* <div className="userGender">{user.gender}</div>
                <div className="userFriend">{user.friend}</div> */}
            </div>
        );
    }

    return (
        <div className="">
            <div>{stateBattle.time} - {stateBattle.day}</div>
            <div>{stateBattle.action}</div>
            <div className="userlist">{renderParty()}</div>
            <button onClick={() => { nextDay() }}>Дальше</button>
        </div>
    );
}

export default Game;
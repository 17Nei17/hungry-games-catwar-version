import React from 'react';

function End(props) {
    function setAliveName() {
        let AliveObject = props.usersList.filter((user) => user.isAlive == true);
        if (AliveObject.length === 0) {
            return "Никто не выжил";
        }
        if (AliveObject.length === 1) {
            return "В живых остался только: " + AliveObject[0].name;
        } else {
            AliveObject.forEach(item => {
                return item.name;
            });
        }

    }

    return (
        <div className="userItem">
            {setAliveName()}
        </div>
    );
}

export default End;
import React from 'react';

function About(props) {
    return (
        <div>
            <div>
                Тут будут важные заметки
            </div>
            <button onClick={() => { props.setAppState("settings") }}>Вернуться</button>
        </div>
    );
}

export default About;
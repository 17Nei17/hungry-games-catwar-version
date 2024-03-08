import UserItem from "./UserItem"
import React, { useState, useEffect } from 'react';
// let obj = { img: 'src', name: 'str', gender: 'srt', friend: 'name' }

function AddUserForm(props) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [img, setImage] = useState('');
    // const [friend, setFriend] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.addUser({ name: name, gender: gender, img: img })
        console.log(img);
    }

    return (
        <form className="setUserForm" onSubmit={handleSubmit}>
            <div className="form-wrap">
                <label className="row-flex">
                    <p>Имя</p>
                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label className="row-flex">
                    <p>Картинка (с пк)</p>
                    <input type="file" name="img" accept="image/*,image/jpeg" onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))}></input>
                </label>
                <label className="row-flex">
                    <p>Картинка (ссылка)</p>
                    <input type="text" name="img" value={img} onChange={(event) => setImage(event.target.value)} />
                </label>
                <label className="row-flex">
                    <p>Пол</p>
                    <input type="text" name="gender" value={gender} onChange={(event) => setGender(event.target.value)} />
                </label>
                <input type="submit" value="Отправить" />
            </div>

        </form>
    );
}

export default AddUserForm;
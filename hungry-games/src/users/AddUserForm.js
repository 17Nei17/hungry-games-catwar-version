import React, { useState } from 'react';
// let obj = { img: 'src', name: 'str', gender: 'srt', friend: 'name' }

function AddUserForm(props) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [img, setImage] = useState('');
    // const [friend, setFriend] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.addUser({ name: name, gender: gender, img: img })
        setName('');
        setGender('');
        setImage('');
    }

    return (
        <div>
            <form className="setUserForm" onSubmit={handleSubmit}>
                <div className="form-wrap">
                    <label className="row-flex">
                        <p>Имя</p>
                        <input required type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label className="row-flex">
                        <p>Картинка (с пк)</p>
                        <input type="file" name="img" accept="image/*,image/jpeg" onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))}></input>
                    </label>
                    <label className="row-flex">
                        <p>Картинка (ссылка)</p>
                        <input type="text" name="img" value={img} onChange={(event) => setImage(event.target.value)} />
                    </label>
                    {/* <label className="row-flex">
                    <p>Пол</p>
                    <input type="text" name="gender" value={gender} onChange={(event) => setGender(event.target.value)} />
                </label> */}
                    <input class="button" type="submit" value="Добавить персонажа" />
                    <button onClick={() => { props.settings() }}>Убрать форму</button>
                </div>
            </form>


        </div>

    );
}

export default AddUserForm;
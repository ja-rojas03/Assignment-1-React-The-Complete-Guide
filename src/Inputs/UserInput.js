import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
    const pStyle = {
        marginBottom : "1px",
        fontStyle: "italic"
    }

    return (
        <div>
            <p style={pStyle}>Input your username : </p>
            <input id="userIn" onChange={props.changed} value={props.username}></input>
        </div>
    );
}

export default UserInput;
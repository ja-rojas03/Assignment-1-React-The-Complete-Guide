import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    const usernameStyle = {
        fontWeight: "bold"
    }
    return(
        <div>
            <p style={usernameStyle}>This is my awesome Username : </p>
            <p id="username">{props.username}</p>
        </div>
    );
}

export default UserOutput;
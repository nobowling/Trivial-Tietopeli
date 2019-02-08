import React from 'react'

const Notification = (props) => {
    return(
        <div style={notificationStyle}>
            <p>{props.notification}</p>
        </div>
    )
}

export default Notification

const notificationStyle = {
    color: 'red'
}
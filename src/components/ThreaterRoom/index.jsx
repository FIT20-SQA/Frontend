import React from 'react';
import './style.scss';

export default function ({ roomImage, roomName, active, onClick }) {
    const style = active ? "room-active" : "";
    return (
        <div className={`Room ${style}`} onClick={() => onClick()}>
            <img className='room-image' src={roomImage} alt="" />
            <p className='room-name'>{roomName}</p>
        </div>
    )
}
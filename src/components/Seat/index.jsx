import React from 'react';
import './style.scss';

export default function ({row, col, onClick}) {
    return (
        <div className="Seat" onClick={onClick}>
            <p className='rowNum'>R{row + 1}</p>
            <p className="seatNum">{(col + 1)}</p>
        </div>
    )
}
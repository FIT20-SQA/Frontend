import React from 'react';
import './style.scss';

export default function ({row, col, onClick, color}) {
    const colorStyle = {backgroundColor: color}
    if (!color) {
        colorStyle.backgroundColor = 'var(--primary-color)'
    }
    return (
        <div className="Seat" onClick={onClick} style={colorStyle}>
            <p className='rowNum'>R{row + 1}</p>
            <p className="seatNum">{(col + 1)}</p>
        </div>
    )
}
import React from 'react';
import './style.scss';
import Seat from '../Seat';
export default function({row, seatNumPerRow}) {
    return (
        <div className="SeatRow">
        {Array.from(Array(seatNumPerRow).keys()).map(col => {
            return (
                <Seat 
                    row={row}
                    col={col}
                />
            )
        })}
    </div>
    )
}
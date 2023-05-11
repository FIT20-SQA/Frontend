import React from 'react';
import './style.scss';
import Seat from '../Seat';
export default function ({ row, col }) {
    return (
        <div className="SeatInfo">
            <Seat
                row={row}
                col={col}
            />
            <p className='seat-price'><span className="bold">Price: </span>$12.5</p>
        </div>
    )
}
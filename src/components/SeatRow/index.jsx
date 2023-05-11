import React from 'react';
import './style.scss';
import Seat from '../Seat';
export default function({row, seatNumPerRow, setSelectedSeats}) {
    const handleClick = (row, col) => {
        setSelectedSeats(prevVal => {
            // ignore the same seat is added twice
            if (prevVal.some((seat) => seat.row == row && seat.col == col)) return prevVal
            return [...prevVal, {row, col}]
        })
    } 
    return (
        <div className="SeatRow">
        {Array.from(Array(seatNumPerRow).keys()).map(col => {
            return (
                <Seat 
                    row={row}
                    col={col}
                    onClick={() => handleClick(row, col)}
                />
            )
        })}
    </div>
    )
}
import React from 'react';
import './style.scss';
import SeatRow from '../SeatRow';
export default function ({ rowNum, seatNumPerRow }) {
    return (
        <div className="SeatChart">
            <h1 className="seat-chart-text">Seat Chart</h1>

            <div className="seat-container">
                {Array.from(Array(rowNum).keys()).map(row => {
                    return (
                        <SeatRow
                            row={row}
                            seatNumPerRow={seatNumPerRow}
                        />

                    )
                })}


            </div>

        </div>
    )
}
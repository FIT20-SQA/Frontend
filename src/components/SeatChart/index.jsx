import React from 'react';
import './style.scss';
import SeatRow from '../SeatRow';
//TODO: useContext for this
export default function ({ rowNum, seatNumPerRow, setSelectedSeats, rowColors }) {
    return (
        <div className="SeatChart">
            <div className="movie-screen">
                <div className="screen"></div>
                <p className="screen-text">Screen</p>

            </div>
            <h1 className="seat-chart-text">Seat Chart</h1>

            <div className="seat-container">
                {Array.from(Array(rowNum).keys()).map((row, index) => {
                    return (
                        <SeatRow
                            row={row}
                            seatNumPerRow={seatNumPerRow}
                            setSelectedSeats={setSelectedSeats}
                            rowColor={rowColors[index]}
                        />

                    )
                })}


            </div>

        </div>
    )
}
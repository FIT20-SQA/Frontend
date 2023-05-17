import React, { useEffect, useState } from 'react';
import './style.scss';
import SeatRow from '../SeatRow';
//TODO: useContext for this
export default function ({ rowNum, seatNumPerRow, setSelectedSeats, rowColors, smallSize }) {

    const smallSizeStyle = smallSize ? 'small-size' : ''
    return (
        <div className={`SeatChart ${smallSizeStyle}`}>
            <div className="movie-screen">
                <div className="screen"></div>
                <p className="screen-text">Screen</p>

            </div>
            <h1 className="seat-chart-text">Seat Chart</h1>

            <div className="seat-container">
                {Array.from(Array(Number(rowNum)).keys()).map((row, index) => {
                    return (
                        <>
                            <SeatRow
                                row={row}
                                seatNumPerRow={seatNumPerRow}
                                setSelectedSeats={setSelectedSeats}
                                rowColor={rowColors ? rowColors[index] : null}
                            />
                        </>

                    )
                })}




            </div>

        </div>
    )
}
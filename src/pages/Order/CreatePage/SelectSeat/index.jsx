import React from 'react';
import './style.scss';
import SeatInfo from '../../../../components/SeatInfo';
import SeatChart from '../../../../components/SeatChart';

export default function ({selectSeats, setSelectedSeats}) {
    return (
        <div className="step-3">
            <div className="seat-info">
                <p className="seat-info-text">
                    {selectSeats.length < 2 ? `${selectSeats.length} Selected Seat` : `${selectSeats.length} Selected Seats`}
                </p>
                <div className="selected-seat-container">
                    {selectSeats.map((seat, index) => {
                        return (
                            <SeatInfo
                                key={index}
                                row={seat.row}
                                col={seat.col}
                            />
                        )
                    })}

                </div>
            </div>
            <div className="seat-chart-container">


                <SeatChart
                    rowNum={10}
                    seatNumPerRow={15}
                    setSelectedSeats={setSelectedSeats}
                />
            </div>
        </div>
    )
}
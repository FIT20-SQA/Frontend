import React, { useState } from 'react';
import './style.scss';
import MovieDetail from '../../../components/MovieDetail';
import MovieShowtimeDetails from '../../../components/MovieShowtimeDetails';
export default function () {
    const [selectedShowtime, setSelectedShowtime] = useState(undefined)
    const [selectedShowtimeSpot, setSelectedShowtimeSpot] = useState(undefined)
    //TODO: click to a spot will redirect it to the scheduling page
    
    const handleClickShowtimeDate = (showtime) => {
        //selectedShowtime can be undefined in the beginning
        if (selectedShowtime?.date !== showtime.date) {
            setSelectedShowtime(showtime);

            if (selectedShowtimeSpot) {
                if (!showtime.spots.includes(selectedShowtimeSpot)) {
                    setSelectedShowtimeSpot(undefined);
                }
            }
        } else {
            // unselect the item when it is clicked twice
            setSelectedShowtime(undefined);
        }
    }

    const handleClickShowtimeSpot = (spot) => {
        if (selectedShowtimeSpot !== spot) {
            setSelectedShowtimeSpot(spot);
        } else {
            // unselect the item when it is clicked twice
            setSelectedShowtimeSpot(undefined);
        }
    }
    return (
        <div className="MovieViewDetailPage">
            <MovieDetail
                displayLargePoster={true}
            />
            <MovieShowtimeDetails
                selectedShowtime={selectedShowtime}
                selectedShowtimeSpot={selectedShowtimeSpot}
                handleClickShowtimeDate={handleClickShowtimeDate}
                handleClickShowtimeSpot={handleClickShowtimeSpot}
            />
        </div>


    )
}
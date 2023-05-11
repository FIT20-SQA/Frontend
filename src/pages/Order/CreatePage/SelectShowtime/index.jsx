import React from 'react';
import './style.scss';
import { useState } from 'react';
import ShowTime from '../../../../components/ShowTime';
import ShowtimeSpot from '../../../../components/ShowtimeSpot';
import MovieDetail from '../../../../components/MovieDetail';
export default function ({selectedShowtime, setSelectedShowtime, selectedShowtimeSpot, setSelectedShowtimeSpot}) {




    const showtimes = [
        {
            date: "Tue May 23 2023 16:35:45 GMT+0700",
            spots: ["10-12", "12-14", "16-18", "20-22"],
        },
        {
            date: "Fri May 27 2023 14:20:00 GMT+0700",
            spots: ["10-12", "12-14", "16-18", "18-20"],
        },
        {
            date: "Sat May 28 2023 18:45:30 GMT+0700",
            spots: ["12-14", "14-16", "16-18", "18-20", "20-22"],
        },
        {
            date: "Wed Jun 1 2023 11:10:15 GMT+0700",
            spots: ["10-12", "14-16", "18-20"],
        },
        {
            date: "Thu Jun 2 2023 17:55:20 GMT+0700",
            spots: ["10-12", "12-14", "16-18"],
        },
        {
            date: "Sun Jun 5 2023 20:30:00 GMT+0700",
            spots: ["10-12", "14-16"],
        },
        {
            date: "Mon Jun 6 2023 12:15:45 GMT+0700",
            spots: ["10-12", "14-16", "18-20"],
        },
        {
            date: "Sat Jun 11 2023 15:00:00 GMT+0700",
            spots: ["10-12"],
        },
        {
            date: "Wed Jun 15 2023 19:30:00 GMT+0700",
            spots: ["12-14", "18-20", "20-22"],
        },
        {
            date: "Fri Jun 17 2023 10:00:00 GMT+0700",
            spots: ["10-12", "12-14", "16-18"],
        },
        {
            date: "Sun Jul 3 2023 14:20:00 GMT+0700",
            spots: ["10-12", "12-14", "16-18", "18-20"],
        },
        {
            date: "Mon Jul 4 2023 18:45:30 GMT+0700",
            spots: ["12-14", "14-16", "16-18", "18-20", "20-22"],
        },
        {
            date: "Wed Jul 6 2023 11:10:15 GMT+0700",
            spots: ["10-12", "14-16", "18-20"],
        },
        {
            date: "Fri Jul 8 2023 17:55:20 GMT+0700",
            spots: ["10-12", "12-14", "16-18"],
        },
        {
            date: "Sun Jul 10 2023 20:30:00 GMT+0700",
            spots: ["10-12", "14-16"],
        },
        {
            date: "Wed Jul 13 2023 12:15:45 GMT+0700",
            spots: ["10-12", "14-16", "18-20"],
        }
    ]

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
            setSelectedShowtime(undefined);
            console.log('unchecled');
        }
    }

    const handleClickShowtimeSpot = (spot) => {
        if (selectedShowtimeSpot !== spot) {
            setSelectedShowtimeSpot(spot);
        } else {
            setSelectedShowtimeSpot(undefined);
        }
    }
    return (
        <div className="step-2">
            <div className="movie-detail">
                <MovieDetail
                    displayLargePoster={false}
                />
                <div className="ShowtimeList">
                    <h1 className="showtime-list-text">Showtimes: </h1>
                    <div className="showtime-container">
                        {showtimes.map((showtime, index) => {
                            return (
                                <ShowTime
                                    showtime={showtime}
                                    onClick={() => handleClickShowtimeDate(showtime)}
                                    isActive={selectedShowtime && selectedShowtime.date == showtime.date}
                                />
                            )

                        })}
                    </div>

                </div>

                <div className="SpotList">
                    <h1 className="spot-list-text">Spots: </h1>
                    {selectedShowtime
                        &&
                        <div className="spot-container">
                            {selectedShowtime.spots.map((spot, index) => {
                                return (
                                    <ShowtimeSpot
                                        onClick={() => handleClickShowtimeSpot(spot)}
                                        spot={spot}
                                        isActive={selectedShowtime.spots.includes(spot) && selectedShowtimeSpot == spot}
                                    />
                                )
                            })}
                        </div>

                    }

                </div>
            </div>
        </div>
    )
}
import './style.scss';
import Movie from '../../../../components/Movie';

import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../../../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ({ selectedMovieIndex, setSelectedMovieIndex }) {
    const [movies, setMovies] = useState([]);
    const { jwtToken } = useContext(UserContext)

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        };
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/movies`, config);
        if (response.data.success) {
            setMovies(response.data.data)
        }
    }
    const navigate = useNavigate()

    const checkIMovieActive = (index) => {
        return selectedMovieIndex === index
    }

    const handleClickMovie = (index) => {
        if (selectedMovieIndex !== index) {
            setSelectedMovieIndex(index);
        } else {
            setSelectedMovieIndex(undefined);
        }
    }

    const checkIfBlur = (index) => {
        if (selectedMovieIndex !== undefined && selectedMovieIndex !== index) {
            return true;
        } else {
            return false;
        }
    }


    return (
        <div className="step-1">
            <div className="movie-container">
                {movies.map((movie, index) => {
                    return (
                        <Movie
                            posterLink={movie.poster}
                            movieTitle={movie.title}
                            releaseDate={movie.releaseDate}
                            isActive={checkIMovieActive(index)}
                            onClick={() => handleClickMovie(index)}
                            blur={checkIfBlur(index)}
                        />
                    )
                })}

            </div>
        </div>
    )
}
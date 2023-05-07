import React from 'react';
import './style.scss';
import { truncateString } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

export default function ({ posterLink , movieTitle, releaseDate }) {
    // only show 10 words
    const navigate = useNavigate()


    return (
        <div className="Movie" onClick={() => navigate('/movies/1')}>
            <img className='movie-poster' src={posterLink} alt="" />
            <div className="movie-info">
                <p className='movie-title'>{truncateString(movieTitle)}</p>
                <p className="release-date">{releaseDate}</p>
            </div>
        </div>
    )
}
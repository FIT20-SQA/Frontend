import React from 'react';
import './style.scss';

export default function ({ posterLink , movieTitle, releaseDate }) {
    // only show 10 words
    const shortName =movieTitle.split(' ').length > 10 ?  movieTitle.split(' ').slice(0, 10).join(' ') + '...' : movieTitle
    return (
        <div className="Movie">
            <img className='movie-poster' src={posterLink} alt="" />
            <div className="movie-info">
                <p className='movie-title'>{shortName}</p>
                <p className="release-date">{releaseDate}</p>
            </div>
        </div>
    )
}
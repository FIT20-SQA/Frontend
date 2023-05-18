import React from 'react';
import './style.scss';
import { truncateString } from '../../utils/utils';

export default function ({ posterLink , movieTitle, releaseDate, onClick, isActive, blur }) {

    const date = new Date(releaseDate);
    const formattedDate = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
    
    let style = isActive ? 'movie-active' : ''
    if (blur) {
        style += ' blur'
    }
    return (
        <div className={`Movie ${style}`} onClick={onClick}>
            <img className='movie-poster' src={posterLink} alt="" />
            <div className="movie-info">
                <p className='movie-title'>{truncateString(movieTitle, 10)}</p>
                <p className="release-date">{formattedDate}</p>
            </div>
        </div>
    )
}
import React from 'react';
import './style.scss';
import { truncateString } from '../../utils/utils';

export default function ({ posterLink , movieTitle, releaseDate, onClick, isActive, blur }) {

    
    let style = isActive ? 'movie-active' : ''
    if (blur) {
        style += ' blur'
    }
    return (
        <div className={`Movie ${style}`} onClick={onClick}>
            <img className='movie-poster' src={posterLink} alt="" />
            <div className="movie-info">
                <p className='movie-title'>{truncateString(movieTitle, 10)}</p>
                <p className="release-date">{releaseDate}</p>
            </div>
        </div>
    )
}
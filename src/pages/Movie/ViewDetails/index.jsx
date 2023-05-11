import React from 'react';
import './style.scss';
import MovieDetail from '../../../components/MovieDetail';
export default function () {
    const movie = {
        title: 'The Avengers',
        posterLink: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
        releaseDate: 'April 2012',
        description: '“The Avengers” is a 2012 superhero film that brings together some of Marvel’s most iconic heroes to save the world from the villainous Loki and his alien army. The movie follows Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., as he assembles a team of superheroes to stop Loki’s plan to enslave humanity. The team includes Iron Man, Captain America, Thor, and the Hulk, as well as Black Widow and Hawkeye. Throughout the movie, the team must learn to work together and overcome their differences to stop Loki’s plan. Along the way, they face challenges and obstacles as they try to save the world. The movie is filled with action-packed scenes and stunning visual effects that will keep audiences on the edge of their seats. One of the strengths of “The Avengers” is its ability to balance multiple actors and storylines while keeping things coherent and entertaining. Each character is given their moment to shine, and the interactions between them are a highlight of the movie. Overall, “The Avengers” is an exciting and thrilling adventure that will delight audiences of all ages.',
        genres: ['Science Fiction', 'Action', 'Adventure'],
        actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson', 'Jeremy Renner'],
        director: ['Joss Whedon'],
        duration: 142,
        country: "United States"
    }

    function formatDuration(duration) {
        const hours = Math.floor(duration / 60)
        const minutes = duration % 60
        if (hours == 0) return `${minutes}m`
        return `${hours}h ${minutes}m`
    }
    return (
        <MovieDetail 
            displayLargePoster={true}
        />
    )
}
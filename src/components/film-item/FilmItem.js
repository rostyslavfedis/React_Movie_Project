import React from 'react';
import style from './FilmItem.module.css'

export const FilmItem = (props) => {

    const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenreList} = props;

    return (
        <div className={style.filmItem}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <span>Rating: {vote_average} (total votes: {vote_count})</span>
                <h3>{movieGenreList.map(({name, id}, i) => (
                    <span key={id}>{name} {i !== movieGenreList.length - 1 && '-'} </span>))}</h3>
                <p>{overview}</p>
                <span>Relesase date: {release_date}</span>
            </div>
        </div>
    )
}
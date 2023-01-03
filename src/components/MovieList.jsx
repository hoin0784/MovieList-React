import React from 'react';
import styles from '../css/MovieList.module.css';
import {Link} from 'react-router-dom';

export default function MovieList({id,title, MovieImg, genres,rating }) {
  return (
    <div>
      <div className={styles.movieImgBox}>
        <Link to = {`/movie/${id}`}>
          <img className={styles.movieImage} src={MovieImg} alt={title} />
          <span className={styles.movieRating}>{`★${rating}/10`}</span>
        </Link>
      </div>  
        <h2 className={styles.movieTitle}>{title}</h2>
      <div className={styles.movieGenre}>  
          {genres.map((genre)=>(
            <li key={genre}>{genre}</li>
          ))}
      </div>
    </div>
  );
}


import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import styles from '../css/Home.module.css';

export default function Home() {

  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
      .then((res) => res.json())
      .then((res) => {
        SetMovies(res.data.movies);
      })

  }, [])

  return (
    <div className={styles.movies}>
      {
        movies.map((movie) => (
          <MovieList
            key={movie.id}
            id = {movie.id}
            title={movie.title}
            MovieImg={movie.medium_cover_image}
            genres={movie.genres}
            rating = {movie.rating}

          />
        ))
      }
    </div>
  );
}


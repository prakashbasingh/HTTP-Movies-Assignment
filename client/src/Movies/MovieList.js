import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

import styled from 'styled-components';

const MovieListContainer = styled.div`
text-decoration: none;
border: 2px solid red;
box-shadow: 0 0 5px 2px red;	
margin: 2rem 10rem;
padding: 0 2rem;
`


function MovieList({ movies }) {
  return (
    <MovieListContainer>
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
    </MovieListContainer>
  );
}

export default MovieList;

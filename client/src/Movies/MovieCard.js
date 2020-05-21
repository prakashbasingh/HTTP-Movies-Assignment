import React from 'react';

import styled from 'styled-components';

const MovieCardContainer = styled.div`
margin: 2rem 0;
border: 1px solid blueviolet;
padding: 2rem;
box-shadow: inset 0 0 16px blueviolet;	


`

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <MovieCardContainer>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </MovieCardContainer>
  );
};

export default MovieCard;

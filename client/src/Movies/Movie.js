import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

import styled from 'styled-components';

const MovieContainer = styled.div`
text-decoration: none;
border: 2px solid blue;
padding: 2rem;
margin: 2rem 10rem;
background: greenyellow;
box-shadow: 0 0 15px 5px blue;	

`


function Movie({ addToSavedList }) {
  const { push } = useHistory();
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  const deleteMovie = e => {
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(res => {
      console.log(res)
      push('/')
    })


  }

  return (
    <MovieContainer>
      <MovieCard movie={movie} />
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
          {/* <button onClick={() => push(`/update-movie/${params.id}`)}>Edit Movie</button> */}
          <button style = {{background: 'red', color:'white'}}
          onClick={() => deleteMovie(params.id)}>Delete Movie</button>
    </MovieContainer>
  );
}

export default Movie;

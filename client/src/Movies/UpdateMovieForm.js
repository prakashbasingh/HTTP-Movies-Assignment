import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components'

const UpdateFormContainer = styled.div`
text-align: center;
background: powderblue;
height: 8rem;
padding: 2rem;
`
const Form = styled.div`
margin: 2rem;
width: auto;
`



const initialMovie = {
    title: '',
    director: '',
    metaScore: '',
    stars: [],
}

const UpdateMovieForm = props => {
    const { push } = useHistory();
    const [movie, setMovie] = useState(initialMovie);
        console.log(movie, '????????????????????????????????????')
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/`)
             .then(res => {
                 console.log(res, 'Movies Data?????????!!!!??!?!?!?!?')
                 setMovie(res.data)
             })
             .catch(err => console.log(err))
    }, [id]);

    const changeHandler = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
          });
        };

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`, movie)
            .then(res => {
                console.log(res.data, 'Are we putting the movie????!?!?!?!??')
            props.setMovieList(res.data);
            push('/');
           
        })
            .catch(err => {
                console.log(err)
            })
        setMovie(initialMovie);
    };
    
    return (
        <UpdateFormContainer>
          <h2>Update Movie</h2>
          <Form onSubmit={handleSubmit}>
            <label>Title:</label>
                <input
                type='text'
                name='title'
                onChange={changeHandler}
                placeholder='Title'
                value={movie.title}
                />
            
            <label>Director:</label>
                <input
                type='text'
                name='director'
                onChange={changeHandler}
                placeholder='Director'
                value={movie.director}
                />

            <label>Metascore:</label>
                <input
                type= 'number'
                name='metaScore'
                onChange={changeHandler}
                placeholder='MetaScore'
                value={movie.metaScore}
                />
            <label>Stars:</label>
                <input
                type='string'
                name='stars'
                onChange={changeHandler}
                placeholder='Stars'
                value={movie.stars}
                />
        
            <button style = {{background: 'green', color: 'white'}}>Update</button>

          </Form>
        </UpdateFormContainer>
      );





};
export default UpdateMovieForm
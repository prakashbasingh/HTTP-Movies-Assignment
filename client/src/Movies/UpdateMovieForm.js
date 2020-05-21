import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components'

const UpdateFormContainer = styled.div`
/* text-align: center; */
background: powderblue;
height: 20rem;
padding: 2rem;
`
const Form = styled.div`
width: auto;
display: flex;
flex-direction: column;
align-content: flex-start; 
align-content: space-between;
`



const initialMovie = {
    title: '',
    director: '',
    metaScore: '',
    stars: [],
}

const UpdateMovieForm = props => {
    const [movie, setMovie] = useState(initialMovie);
        console.log(movie, '????????????????????????????????????')
    const { id } = useParams();
    const { push } = useHistory();
    const{movieList, setMovieList } = props

    //to populate movie information in update form
    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
             .then(res => {
                 console.log(res.data, 'Movies Data?????????!!!!??!?!?!?!?')
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
            setMovieList(res.data);
               push('/');
        setMovie(initialMovie);
           
        })
            .catch(err => {
                console.log(err)
            })
        
    };
    
    return (
        <UpdateFormContainer>
          <h2>Update Movie</h2>
          <Form onSubmit={handleSubmit}>
            <div style = {{margin: '5px'}} >
                <label>Title:</label>
                    <input style = {{width: '500px'}}
                    type='text'
                    name='title'
                    onChange={changeHandler}
                    placeholder='Title'
                    value={movie.title}
                    /> 
            </div>
            
            <div style = {{margin: '5px'}} >
                <label>Director:</label>
                    <input style = {{width: '500px'}}
                    type='text'
                    name='director'
                    onChange={changeHandler}
                    placeholder='Director'
                    value={movie.director}
                    />
            </div>
            <div style = {{margin: '5px'}} >
                <label>Metascore:</label>
                    <input style = {{width: '500px'}}
                    type= 'number'
                    name='metaScore'
                    onChange={changeHandler}
                    placeholder='MetaScore'
                    value={movie.metaScore}
                    />
            </div>
              
            <div style = {{margin: '5px'}} >
                <label>Stars:</label>
                    <input style = {{width: '600px'}}
                    type='string'
                    name='stars'
                    onChange={changeHandler}
                    placeholder='Stars'
                    value={movie.stars}
                    />
            </div>         
        
            <button style = {{background: 'green', color: 'white', margin: '1rem', width: '100px'}}>Update</button>

          </Form>
        </UpdateFormContainer>
      );





};
export default UpdateMovieForm
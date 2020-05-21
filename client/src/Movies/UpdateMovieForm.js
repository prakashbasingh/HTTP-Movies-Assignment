import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';


const initialMovie = {
    title: '',
    director: '',
    metaScore: '',
    stars: '',
}

const UpdateMovieForm = props => {
    const [movie, setMovie] = useState(initialMovie);
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
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
                console.log(res, 'Are we putting the movie????!?!?!?!??')
            push(`/`);
        })
            .catch(err => {
                console.log(err)
            })
    };
    
    return (
        <div>
          <h2>Update Movie</h2>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
                <input
                type='text'
                name='title'
                onChange={changeHandler}
                placeholder='Title'
                value={item.title}
                />
            
            <label>Director:</label>
                <input
                type='number'
                name='director'
                onChange={changeHandler}
                placeholder='Director'
                value={item.director}
                />

            <label>Metascore:</label>
            <input
              type= 'number'
              name='metaScore'
              onChange={changeHandler}
              placeholder='MetaScore'
              value={item.metaScore}
            />
            <label>Stars:</label>
            <input
              type='string'
              name='stars'
              onChange={changeHandler}
              placeholder='Stars'
              value={item.stars}
            />
        
            <button>Update</button>

          </form>
        </div>
      );





};
export default UpdateMovieForm
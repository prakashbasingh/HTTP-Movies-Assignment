import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';

const NavigationContainer = styled.div`
background: burlywood;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

function SavedList({ list }) {
  return (
    <NavigationContainer>
      <h3>Saved Movies:</h3>
      {list.map(movie => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </NavigationContainer>
  );
}

export default SavedList;

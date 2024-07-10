import { useEffect, useState } from 'react';
import './movies.css';
import PropTypes from 'prop-types';

// ICON IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import WatchLater from '../../routes/dashboard/WatchLater';
// const starIcon = <FontAwesomeIcon icon={faStar} className='icon'/>;
// const clockIcon = <FontAwesomeIcon icon={faClock} className='icon'/>;


function MovieCard ({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    // console.log(`Movie card access token: ${accessToken}`);
    // GET FAVORITES
    axios.get('http://localhost:8000/api/titles/favorite', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      const favoriteIds = response.data.map(fav => fav.imdbId);
      console.log(`Movie card setting is favorite: ${movie.imdbId}`);
      // console.log(`response.data.includes(movie.imdbId) ${response.data.map(fav => fav.imdbId)}`);
      setIsFavorite(favoriteIds.includes(movie.imdbId))
    }).catch(error => {
      console.error(`MovieCard Error: ${error}`);
    })
    // GET WATCH LATER
    axios.get('http://localhost:8000/api/titles/watchlater/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      const watchLaterIds = response.data.map(fav => fav.imdbId);
      setIsWatchLater(watchLaterIds.includes(movie.imdbId))
    }).catch(error => {
      console.error(`MovieCard Error: ${error}`);
    }) 
  }, []);

  function handleClick(type) {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    };
    console.log(config);
    console.log(`movie card handle click type: ${type}`);
    if (type === 'favorite') {
      if (isFavorite) {
        axios.delete(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`, config).then(response => 
        {
          console.log(`Movie card favorite delete ${movie.title} response: ${response}`);
        }).catch(error => {
          console.error(`Movie card favorite delete ${movie.title} error: ${error}`);
        });
        setIsFavorite(false);
      } else {
        axios.post(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`, null, config).then(response => 
        {
          console.log(`Movie card favorite add ${movie.title} response: ${response}`);
        }).catch(error => {
          console.error(`Movie card favorite add ${movie.title} error: ${error}`);
        });
        setIsFavorite(true);
      }
    } else {
      if (isWatchLater) {
        axios.delete(`http://localhost:8000/api/titles/watchlater/${movie.imdbId}`, config).then(response => 
        {
          console.log(`Movie card WL delete ${movie.title} response: ${response}`);
        }).catch(error => {
          console.error(`Movie card WL delete ${movie.title} error: ${error}`);
        });
        setIsWatchLater(false);
      } else {
        axios.post(`http://localhost:8000/api/titles/watchlater/${movie.imdbId}`, null, config).then(response => 
        {
          console.log(`Movie card WL add ${movie.title} response: ${response}`);
        }).catch(error => {
          console.error(`Movie card WL add ${movie.title} error: ${error}`);
        });
        setIsWatchLater(true);
      }
    }
  }

  return (
    <li>
      {isFavorite ?
        <FontAwesomeIcon icon={faStar} className='icon-true' onClick={() => handleClick('favorite')} /> 
        :
        <FontAwesomeIcon icon={faStar} className='icon' onClick={() => handleClick('favorite')} />
      }
      {isWatchLater ? <FontAwesomeIcon icon={faClock} className='icon-true' onClick={() => handleClick('watchlater')} /> :
        <FontAwesomeIcon icon={faClock} className='icon' onClick={() => handleClick('watchlater')} />
      }
      <h1>title: {movie.title}</h1>
      <p>Is Favorite: {isFavorite.toString()}, Is Watch Later: {isWatchLater.toString()}</p>
      <p>Synopsis: {movie.synopsis}</p>
      <p>Genre: {movie.genres}</p>
      <p>ID: {movie.id}</p>
      <p>IMDB ID: {movie.imdbId}</p>
      <p>Released: {movie.released}</p>
      <p>IMDB Rating: {movie.imdbrating}</p>
      <p></p>
      <p></p>
    </li>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard;
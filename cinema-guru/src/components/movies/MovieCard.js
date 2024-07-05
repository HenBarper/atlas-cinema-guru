import { useEffect, useState } from 'react';
import './movies.css';
import PropTypes from 'prop-types';

// ICON IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// const starIcon = <FontAwesomeIcon icon={faStar} className='icon'/>;
// const clockIcon = <FontAwesomeIcon icon={faClock} className='icon'/>;


function MoiveCard ({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    // GET FAVORITES
    axios.get('http://localhost/8000/api/titles/favorite/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      setIsFavorite(response.data.includes(movie.imdbId))
    }).catch(error => {
      console.error(`MovieCard Error: ${error}`);
    })
    // GET WATCH LATER
    axios.get('http://localhost/8000/api/titles/watchLater/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      setIsWatchLater(response.data.includes(movie.imdbId))
    }).catch(error => {
      console.error(`MovieCard Error: ${error}`);
    }) 
  }, []);

  function handleClick(type) {
    switch (type) {
      case 'favorite':
        if (isFavorite) {
          axios.delete(`http://localhost:8000/api/titles/favorite?imdbId=${movie.imdbId}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }).then(response => {
            console.log(`Movie card favorite add ${movie.title} response: ${response}`);
          }).catch(error => {
            console.error(`Movie card favorite add ${movie.title} error: ${error}`);
          });
          setIsFavorite(false);
        } else {
          axios.post(`http://localhost:8000/api/titles/favorite?imdbId=${movie.imdbId}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }).then(response => {
            console.log(`Movie card favorite add ${movie.title} response: ${response}`);
          }).catch(error => {
            console.error(`Movie card favorite add ${movie.title} error: ${error}`);
          });
          setIsFavorite(true);
        }
        break;
      case 'watchlater':
        if (isWatchLater) {
          axios.delete(`http://localhost:8000/api/titles/watchlater?imdbId=${movie.imdbId}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }).then(response => {
            console.log(`Movie card favorite add ${movie.title} response: ${response}`);
          }).catch(error => {
            console.error(`Movie card favorite add ${movie.title} error: ${error}`);
          });
          setIsWatchLater(false);
        } else {
          axios.post(`http://localhost:8000/api/titles/watchlater?imdbId=${movie.imdbId}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }).then(response => {
            console.log(`Movie card favorite add ${movie.title} response: ${response}`);
          }).catch(error => {
            console.error(`Movie card favorite add ${movie.title} error: ${error}`);
          });
          setIsWatchLater(true);
        }
        break;
      default:
        console.error(`Error: MoveiCard handleClick event has unaccounted for type: ${type}`)
        break;
    }
  }

  return (
    <li>
      <FontAwesomeIcon icon={faStar} className='icon' onClick={handleClick('favorite')} />;
      <FontAwesomeIcon icon={faClock} className='icon' onClick={handleClick('watchlater')} />;
      {movie.title}
      {movie.synopsis}
      {movie.genres}
    </li>
  )
}

MoveiCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MoiveCard;
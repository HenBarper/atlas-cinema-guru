import { useState } from 'react';
import './movies.css';
import PropTypes from 'prop-types';

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (isSelected) {
      setGenres(genres.filter(g => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
    setSelected(!selected);
  }

  return (
    <li onClick={handleTag}>{genre}</li>
  )
}

Tag.propTypes = {
  genre: PropTypes.string.isRequired,
  filter: PropTypes.bool,
  genres: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired
}

export default Tag;
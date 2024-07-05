import './movies.css';
import PropTypes from 'prop-types';
import { searchIcon } from '../../assets/fontIcons';

// COMPONENT IMPORTS
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';

const filterOptions = [
  {name: 'latest', id: '001'},
  {name: 'oldest', id: '002'},
  {name: 'highestRated', id: '003'},
  {name: 'lowestRated', id: '004'},
]

function Filter (minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle) {
  const tags = ["action", "drama", "comedy", "biography", "romance", "thriller", "war", "history", "sport", "sci-fi", "documentary", "crime", "fantasy"];

  function handleMinYear () {
    setMinYear(minYear);
  }
  function handleMaxYear () {
    setMaxYear(maxYear);
  }
  function handleSort () {
    setSort(sort)
  }

  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} icon={searchIcon} />
      <Input label='Min Date:' type='number' className='minDateInput' value={minYear} setValue={handleMinYear} />
      <Input label='Max Date:' type='number' className='maxDateInput' value={maxYear} setValue={handleMaxYear} />
      <SelectInput label='Sort:' options={filterOptions} className='sortOptions' value={sort} setValue={handleSort} />
      {tags.map(tag => (
        <Tag key={tag} genre={tag} filter={true} genres={genres} setGenres={setGenres} />
      ))}
    </div>
  )
}

Filter.propTypes = {
  minyear: PropTypes.number,
  setMinYear: PropTypes.func,
  maxYear: PropTypes.number,
  setMaxYear: PropTypes.func,
  sort: PropTypes.string,
  setSort: PropTypes.func,
  genres: PropTypes.string,
  setGenres: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func
}

export default Filter;
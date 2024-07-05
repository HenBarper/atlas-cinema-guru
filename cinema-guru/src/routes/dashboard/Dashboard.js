// BASE IMPORTS
import './dashboard.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

// COMPONENT IMPORTS -----------------------------------
import Header from '../../components/navigation/Header';
import SearchBar from '../../components/general/SearchBar';
import SideBar from '../../components/navigation/SideBar';

// ICON IMPORTS
import { searchIcon } from '../../assets/fontIcons';

function Dashboard ({ userUsername, setIsLoggedIn }) {
  // COMPONENT SATES
  const [searchTitle, setSearchTitle] = useState('');

  return (
    <div className='dashboard'>
      <SearchBar title={searchTitle} setTitle={setSearchTitle} icon={searchIcon}/>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <p>This is the dashboard!</p>
      <SideBar />
    </div>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}

export default Dashboard;
// BASE IMPORTS
import './dashboard.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

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
    <BrowserRouter>
      <div className='dashboard'>
        <SearchBar title={searchTitle} setTitle={setSearchTitle} icon={searchIcon}/>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <p>This is the dashboard!</p>
        <SideBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/watchlater' element={<WatchLater />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}

export default Dashboard;
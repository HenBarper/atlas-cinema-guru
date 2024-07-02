// BASE IMPORTS -----------------
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// COMPONENT IMPORTS --------------------------------------
import Input from './components/general/Input'
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

// ICON IMPORTS ------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// ICONS ---------------------------------------------------------
const userIcon = <FontAwesomeIcon icon={faUser} className='icon'/>
const keyIcon = <FontAwesomeIcon icon={faKey} className='icon'/>
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>

// DEAFULT/TESTING OBJECTS & COMPONENTS
const selectOptions = [
  { name: 'opOne', id: '1' },
  { name: 'opTwo', id: '2' },
  { name: 'opThree', id:'3' }
]
const Dashboard = (username) => <div>Welcome to the Dashboard {username}</div>;
const Authentication = () => <div>Please authenticate</div>;

function App() {
  // LOG IN STATE --------------------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  // API REQUEST FOR ACCESS TOKEN --------------------------
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(`Access Token: ${accessToken}`);
    if (accessToken) {
      console.log(`Posting!`);
      axios.post('http://localhost:8000/api/auth', {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        console.log(`Response success`)
        if (response.data.success) {
          setIsLoggedIn(true);
          console.log(`username: ${response.data.username}`);
          setUserUsername(response.data.username);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }, []);

  // COMPONENT STATES ----------------------------------
  const [userName, setUserName] = useState('');
  const [optionSelect, setOptionSelect] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  // RENDERED COMPONENTS ---------------------------------------------------------------------------------------------------------
  return (
    <div className='App'>
      <Input label='Username:' type='text' className='input' value={userName} setValue={setUserName} icon={userIcon} />
      <SelectInput label='Sort:' options={selectOptions} className='selectInput' value={optionSelect} setValue={setOptionSelect}/>
      <Button label='signUp' className='button' onClick={() => {}} icon={keyIcon} /><br></br>
      <SearchBar title={searchTitle} setTitle={setSearchTitle} icon={searchIcon}/>
      {isLoggedIn ? (
        <Dashboard userName={userUsername}/>
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;

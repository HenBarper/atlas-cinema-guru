// BASE IMPORTS ----------------------------
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// COMPONENT IMPORTS ----------------------------------------
// import Input from './components/general/Input';
// import SelectInput from './components/general/SelectInput';
// import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

// ICON IMPORTS --------------------------------
import { searchIcon } from './assets/fontIcons';

// DEAFULT/TESTING OBJECTS & COMPONENTS
// const selectOptions = [
//   { name: 'opOne', id: '1' },
//   { name: 'opTwo', id: '2' },
//   { name: 'opThree', id:'3' }
// ]

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
        console.log(response);
        if (response.request.status === 200) {
          setIsLoggedIn(true);
          console.log(`username: ${response.data.username} isLoggedIn: ${isLoggedIn}`);
          setUserUsername(response.data.username);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }, []);

  // COMPONENT STATES ----------------------------------
  // const [userName, setUserName] = useState('');
  // const [optionSelect, setOptionSelect] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  // RENDERED COMPONENTS ---------------------------------------------------------------------------------------------------------
  return (
    <div className='App'>
      {/* <Input label='Username:' type='text' className='input' value={userName} setValue={setUserName} icon={userIcon} /> */}
      {/* <SelectInput label='Sort:' options={selectOptions} className='selectInput' value={optionSelect} setValue={setOptionSelect}/> */}
      {/* <Button label='signUp' className='button' onClick={() => {}} icon={keyIcon} /><br></br> */}
      <SearchBar title={searchTitle} setTitle={setSearchTitle} icon={searchIcon}/>
      {/* <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/> */}
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/>
      )}
    </div>
  );
}

export default App;

// BASE IMPORTS ----------------------------
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import axios from 'axios';

// COMPONENT IMPORTS ----------------------------------------
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  // LOG IN STATE --------------------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  // API REQUEST FOR ACCESS TOKEN --------------------------
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    // console.log(`App.js Access Token: ${accessToken}`);
    if (accessToken) {
      console.log(`App.js Posting!`);
      axios.post('http://localhost:8000/api/auth', {}, {
        headers: {'Authorization': `Bearer ${accessToken}`}
      }).then(response => {
        // console.log(`Response success: ${response}`);
        if (response.request.status === 200) {
          setIsLoggedIn(true);
          console.log(`username: ${response.data.username} isLoggedIn: ${isLoggedIn}`);
          setUserUsername(response.data.username);
        }
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  }, []);

  // RENDERED COMPONENTS ----------------------------------------------------------------
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            />
            <Route
                exact
                path="/favorites"
                element={<Favorites />}
            />
            <Route
                exact
                path="/watchlater"
                element={<WatchLater />}
            />
        </Routes>
      </BrowserRouter>
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/>
      )}
    </div>
  );
}

export default App;

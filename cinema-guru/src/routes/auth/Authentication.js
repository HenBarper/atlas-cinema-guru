// BASE IMPORTS -------------------
import { useState } from 'react';
import './auth.css';
import PropTypes from 'prop-types';

// COMPONENT IMPORTS --------------------------------
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    set_switch(true);
  }
  function handleSignUp() {
    set_switch(false);
  }

  return (
    <>
      <form className='authForm'>
        {_switch ? <div>
          <Button label='Sign In' className='inactive-button' onClick={handleSignIn} />
          <Button label='Sign Up' className='active-button' onClick={handleSignUp} />
          <Login userName={username} password={password} setUserName={setUsername} setPassword={setPassword} />
        </div> : <div>
          <Button label='Sign In' className='active-button' onClick={handleSignIn} />
          <Button label='Sign Up' className='inactive-button' onClick={handleSignUp} />
          <Register userName={username} password={password} setUserName={setUsername} setPassword={setPassword} />
        </div>}
      </form>
    </>
  )
}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserUsername: PropTypes.func.isRequired
}

export default Authentication;

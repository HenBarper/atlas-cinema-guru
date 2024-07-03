// BASE IMPORTS -------------------
// import { useState } from 'react';
import './auth.css';
import PropTypes from 'prop-types';

// COMPONENT IMPORTS --------------------------------
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

// ICON IMPORTS -------------------------------------------
import { userIcon, keyIcon } from '../../assets/fontIcons';

function Login({ userName, password, setUserName, setPassword }) {
  return (
    <>
      <Input label='Username:' type='text' className='input' value={userName} setValue={setUserName} icon={userIcon} />
      <Input label='Password:' type='text' className='input' value={password} setValue={setPassword} icon={keyIcon} />
      <Button label='Log In' className='button' onClick={() => {}} icon={keyIcon} />
    </>
  )
}

Login.prototypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired
}

export default Login;
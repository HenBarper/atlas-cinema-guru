import './navigation.css';
import PropTypes from 'prop-types';

import { userIcon } from '../../assets/fontIcons';

function Header({ userUsername, setIsLoggedIn }) {
  function Logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <>
      <nav>
        <img src="https://picsum.photos/100/100"></img>
        <p>Welcome {userUsername}</p>
        <span onClick={Logout}>
          {userIcon} Logout
        </span>
      </nav>
    </>
  )
}

Header.prototypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}

export default Header;
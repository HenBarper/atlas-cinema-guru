// ICON IMPORTS ---------------------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faMagnifyingGlass, faFolder, faStar, faClock, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// ICONS -----------------------------------------------------------------------
const userIcon = <FontAwesomeIcon icon={faUser} className='icon'/>;
const keyIcon = <FontAwesomeIcon icon={faKey} className='icon'/>;
const keyButtonIcon = <FontAwesomeIcon icon={faKey} className='button-icon'/>;
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>;
const folderIcon = <FontAwesomeIcon icon={faFolder} className='icon'/>;
const starIcon = <FontAwesomeIcon icon={faStar} className='icon'/>;
const clockIcon = <FontAwesomeIcon icon={faClock} className='icon'/>;
const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} className='logout-icon'/>;

export {
  userIcon,
  keyIcon,
  keyButtonIcon,
  searchIcon,
  folderIcon,
  starIcon,
  clockIcon,
  logoutIcon
};
// BASE IMPORTS ----------------------------
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// COMPONENT IMPORTS --------------
import Activity from '../Activity';

// STYLE IMPORTS --------------------------------------------------------
import './navigation.css';
import { folderIcon, starIcon, clockIcon } from '../../assets/fontIcons';

function SideBar() {
  // STATES ------------------------------------------------
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivites] = useState(false);

  // GET ACTIVITIES FROM API -------------------------------
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('http://localhost:8000/api/activity', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }).then(response => {
      console.log(`SideBar success get response.data aka activities: ${response.data}`);
      setActivities(response.data);
    }).catch(error => {
      console.error(`Sidebar Error: ${error}`);
    });
  }, []);

  // SET PAGE ROUTES ------------
  const navigate = useNavigate();
  function setPage(pageName) {
    setSelected(pageName);
    switch (pageName) {
      case 'Home':
        navigate('/');
        break;
      case 'Favorite':
        navigate('/favorite');
        break;
      case 'Watch Later':
        navigate('/watchlater');
        break;
      default:
        navigate('/');
        break;
    }
  }

  // RETURN COMPONENT -----------------------------------------------------------
  return (
    <nav className={`sidebar ${small ? 'small' : ''}`}>
      <h1>Side Bar</h1>
      <ul className='navigation'>
        <li onClick={() => setPage('Home')}>{folderIcon} Home</li>
        <li onClick={() => setPage('Favorite')}>{starIcon} Favorites</li>
        <li onClick={() => setPage('Watch Later')}>{clockIcon} Watch Later</li>
      </ul>
      <ul className='activity-list'>
        {activities.length !== 0 ? 
          activities.slice(0, 10).map(activity => (
            <Activity key={activity.id} activity={activity} />
          ))
        :
          <p>no activites</p>
        }
      </ul>
      <h1>Side Bar End</h1>
    </nav>
  )
}

export default SideBar;
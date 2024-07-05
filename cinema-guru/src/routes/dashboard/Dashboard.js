import './dashboard.css';
import Header from '../../components/navigation/Header';
import PropTypes from 'prop-types';

function Dashboard ({ userUsername, setIsLoggedIn }) {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <p>This is the dashboard!</p>
    </div>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}

export default Dashboard;
import './components.css';

function Activity({ activity }) {
  return (
    <li>{`${activity.userName} added ${activity.title} to ${activity.favwatchlater} - ${activity.date}`}</li>
  )
}

export default Activity;
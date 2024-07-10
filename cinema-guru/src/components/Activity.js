import './components.css';

function Activity({ activity }) {
  return (
    <li><p><span className='red-activity'>{activity.user.username}</span> added <span className='red-activity'>{activity.title.title}</span> to {`${activity.activityType} - ${activity.updatedAt}`}</p></li>
  )
}

export default Activity;
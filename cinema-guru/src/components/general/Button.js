import './general.css';
import PropTypes from 'prop-types';

function Button({ label, className, onClick, icon }) {
  return (
    <button className={className} onClick={onClick}>
      {icon && icon}
      <label>{label}</label>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element
}

export default Button;
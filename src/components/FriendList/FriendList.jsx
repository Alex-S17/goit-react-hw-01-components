import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export function FriendList({ props }) {
  return (
    <ul className={css.friendList}>
      {props.map(prop => (
        <li key={prop.id} className={css.item}>
          <span
            className={css.status}
            style={{ backgroundColor: getActivityColor(prop.isOnline) }}>
          </span>
          <img className={css.avatar} src={prop.avatar} alt="User avatar" width="48" />
          <p className={css.name}>{prop.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })).isRequired,
}

function getActivityColor(status) {  
  if (status) {
    return 'green'
  }
  return 'red'
};
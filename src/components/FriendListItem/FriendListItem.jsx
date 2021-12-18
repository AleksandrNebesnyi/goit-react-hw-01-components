import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={s.item}>
    <span className={isOnline ? s.online : s.offline}></span>
    <img className={s.avatar} src={avatar} alt={name} width="60" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

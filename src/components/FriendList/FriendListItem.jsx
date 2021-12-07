import PropTypes from "prop-types";
const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className="status"></span>
    <img className="avatar" src={avatar} alt={name} width="60" />
    <p className="name">{name}</p>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

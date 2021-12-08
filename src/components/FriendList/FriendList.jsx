// Компонент должен принимать один проп friends - массив объектов друзей.

// Компонент должен создавать DOM следующей структуры.

// <ul class="friend-list">
//   <!-- Произвольное кол-во FriendListItem -->
// </ul>
// Описание компонента <FriendListItem>
// Компонент должен принимать несколько пропов:

// avatar - ссылка на аватар
// name - имя друга
// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
// В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

// Компонент должен создавать DOM следующей структуры.

// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li>

import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={s['friend-list']}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
        
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default FriendList;

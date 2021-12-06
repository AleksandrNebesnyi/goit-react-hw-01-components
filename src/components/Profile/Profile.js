// Компонент должен принимать несколько пропсов с информацией о пользователе:

// username — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — ссылка на изображение
// stats — объект с информацией об активности
// Компонент должен создавать DOM элемент следующей структуры.



// Пример использования
// import user from 'путь/к/user.json;

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />

import PropTypes from 'prop-types';
import s from './Profile.module.scss'

console.log(PropTypes);


const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
})=>{
    return ( 
<div className={s.profile}>
<div className="description">
   <img
      src={avatar}
      alt="User avatar"      
      className="avatar"
     />    
      <p className="name">{username}</p>
     <p className="tag">@{tag}</p>
     <p className="location">{location}</p>
   </div>

   <ul className="stats">
    <li>
       <span className="label">Followers</span>
       <span className="quantity">{stats.followers}</span>
     </li>
     <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>     
      </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
     </li>
  </ul> 
  </div>) };


export default Profile;


// const Painting = ({
//     imageUrl = defaultImage,
//     title,
//     profileUrl,
//     author = 'не известно',
//     price,
//     quantity,
//   }) => {
//     return (
//       <div>
//         <img src={imageUrl} alt={title} width="480" />
//         <h2>{title}</h2>
//         <p>
//           Автор: <a href={profileUrl}>{author}</a>
//         </p>
//         <p>Цена: {price} кредитов</p>
//         <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
//         <button type="button">Добавить в корзину</button>
//       </div>
//     );
//   };
  
//   Painting.propTypes = {
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     profileUrl: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired,
//   };
  
//   export default Painting;

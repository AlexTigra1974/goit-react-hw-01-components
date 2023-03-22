import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};
Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    // id: PropTypes.number.isRequired,
  }).isRequired,
};

//  <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li>;

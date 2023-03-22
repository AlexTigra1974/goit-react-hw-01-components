import PropTypes from 'prop-types';
import { Friend } from './FriendListItem';
import css from './Friends.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

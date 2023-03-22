import { Profile } from 'components/Profile/ProfileList';
// import { StatisticsList } from 'components/Statistics/StatisticsList';
// import { FriendsList } from 'components/Friends/FriendsList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../data_hw/user.json';
// import data from '../data_hw/data.json';
// import friends from '../data_hw/friends.json';
// import transactions from '../data_hw/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <StatisticsList title="Upload stats" stats={data} /> */}
      {/* <FriendsList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
    </>
  );
};

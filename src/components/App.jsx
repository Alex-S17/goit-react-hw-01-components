import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { Transactions } from "./Transactions/Transactions";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    <Statistics title="Upload stats" props={data} />
    <FriendList props={friends} />
    <Transactions props={transactions} />  
    </>
  );
};


import "./App.css";

import user from "./data/user.json";
import Profile from "./components/Profile/Profile";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";

import data from './data/data.json'
import Statistics from './components/Statistics/Statistics'

import transactions from './data/transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />

         <Statistics title="Upload stats" stats={data} />
         <Statistics stats={data} />

         <TransactionHistory items={transactions} />

      
      </header>
    </div>
  );
}

export default App;

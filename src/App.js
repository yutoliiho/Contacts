import React from 'react';
import ListContacts from './ListContacts';
import FavMovie from './data';

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

function App() {
  return (
    <div className="App">
      {/* <ListContacts contacts={contacts}/> */}
      <FavMovie />

    </div>
  );
}

export default App;

// props - pass data into your components
// functional components 
// controlled components - hookup the forms in your app to your components state 
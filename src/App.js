import React from 'react';
import ListContacts from './ListContacts';

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
      <ListContacts contacts={contacts}/>
      {contacts.map((contact)=>{
        const userName = contact.name;
        const userHandle = contact.handle;
        return(
          <ul key={contact.id}>
            <p>{`${userName}`}</p>
            <p>{`${userHandle}`}</p>
            <br></br>
          </ul>
        )
      })}
    </div>
  );
}

export default App;

// props - pass data into your components
// functional components 
// controlled components - hookup the forms in your app to your components state 
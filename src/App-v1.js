import React from 'react';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}
class User extends React.Component{
  render(){
      return(
          <div>
              <p>Username: {this.props.username}</p>
          </div>
      )
  }
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[
          { name: 'Tyler '},
          { name: 'Karen' },
          { name: 'Richard '}
        ]}/>
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Mikenzi' },
          { name: 'Ryan' }
        ]}/>
        <User username='tong' />
    </div>
  );
}

export default App;

// props - pass data into your components
// functional components 
// controlled components - hookup the forms in your app to your components state 
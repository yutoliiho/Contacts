import React from 'react'
// Convert ListContacts To A Stateless Functional Component 
// this is a stateless function!! 
function ListContacts (props) {
    return(
        <ol className='contact-list'>                
            {props.contacts.map((contact)=>(
                <li key={contact.id} className='contact-list-item'>
                    <div
                        className='contact-avatar'
                        style={{
                            backgroundImage: `url(${contact.avatarURL})`
                            }}>
                    </div>
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button
                        onClick={() => props.onDeleteContact(contact)}
                        className='contact-remove'>
                        Remove
                    </button>
                </li>
            ))}
            </ol>
    )    
}

// class ListContacts extends Component {
//     render(){
//         return(            
//             <ol className='contact-list'>                
//                 {this.props.contacts.map((contact)=>(
//                     <li key={contact.id} className='contact-list-item'>
//                         <div
//                             className='contact-avatar'
//                             style={{
//                                 backgroundImage: `url(${contact.avatarURL})`
//                                 }}>
//                         </div>
//                         <div className='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.handle}</p>
//                         </div>
//                         <button className='contact-remove'>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ol>
//         )
//     }
// }

export default ListContacts
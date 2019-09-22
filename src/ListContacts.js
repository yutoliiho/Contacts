import React, { Component } from 'react'

class ListContacts extends Component {
    render(){
        // console.log('Props',this.props)
        return(
            <ol className='contact-list'>
                <p>Hi, this is ListContacts Component Area</p>

                {this.props.contacts.map((contact)=>(
                    <li key={contact.id}>
                        {contact.name}
                    </li>
                ))}
                
                <p>Hi, this is ListContacts Component Area</p>
            </ol>
        )
    }
}

export default ListContacts
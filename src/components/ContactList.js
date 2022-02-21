import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component{
    render(){
        let contacts;
        if(this.props.contacts.length == 0){
          contacts = <h2>There are no contacts yet</h2>
        } else if(this.props.contacts == 'No match'){
          contacts = <h2>No match</h2>;
        } else {
          contacts = this.props.contacts.map((contact) => {
            return(
              <Contact key={contact._id} _id={contact._id} name={contact.name}
              phone={contact.phone} removeContact={this.props.removeContact} />
            );
          });
        }

        return(
            <div className="contact-list">
                {contacts}
            </div>
        );
    }
}

export default ContactList;

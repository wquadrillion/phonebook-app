import React from 'react';
import ContactList from './ContactList';
import CreateContactIcon from './CreateContactIcon';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {filterValue: ''};

    this.filterInput = this.filterInput.bind(this);
  }

  filterInput(e){
    this.setState({filterValue: e.target.value});
  }

  render() {
    // filtering input
    let contacts, newContacts = [];
    
    if(this.state.filterValue == ''){
      contacts = this.props.contacts;
    } else {
      contacts = this.props.contacts;
      let filter = this.state.filterValue.toUpperCase();
      for(let i = 0; i < contacts.length; i++){
        let name = contacts[i].name.toUpperCase();
        if(name.indexOf(filter) > -1){
          newContacts.push(contacts[i]);
        }
      }

      if(newContacts.length == 0){
        newContacts = 'No match';
      }

      contacts = newContacts;
    }

    return (
      <div className="layout main">
        <CreateContactIcon />
        <h1>Phone Book Application</h1>
        <input type="text" placeholder="Search"
        value={this.state.filterValue} onChange={this.filterInput} />
        <hr />
        <ContactList contacts={contacts} removeContact={this.props.removeContact} />
      </div>
    );
  }
}

export default Main;

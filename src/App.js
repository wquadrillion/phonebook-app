import React from 'react';
import Main from './components/Main';
import CreateContact from './components/CreateContact';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
    };

    this.removeContact = this.removeContact.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  componentDidMount(){
    this.setState({
      contacts: [
        {
          name: 'First Dummy',
          phone: '123',
          _id: Math.floor(Math.random() * 1000000)
        },
        {
          name: 'Second Dummy',
          phone: '456',
          _id: Math.floor(Math.random() * 1000000)
        },
        {
          name: 'Third Dummy',
          phone: '789',
          _id: Math.floor(Math.random() * 1000000)
        }
      ]
    });
  }

  removeContact(id){
    // remove from state so it updates view 
    let contacts = this.state.contacts;
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i]._id == id){
        contacts.splice(i, 1);
      }
    }

    this.setState({contacts: contacts});
  }

  addContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contacts: contacts});
  }

  render() {
    return (
      <div className="App">
        <div className="content-wrap">
          <Route exact path="/" component={(props) => <Main contacts={this.state.contacts}
          removeContact={this.removeContact} /> } />
          <Route path="/create" render={(props) => <CreateContact addContact={this.addContact} /> } />
        </div>
      </div>
    );
  }
}

export default App;

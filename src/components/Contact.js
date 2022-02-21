import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactIcon from './contact_icon.svg';

class Contact extends React.Component{
  constructor(){
    super();

    this.removeContact = this.removeContact.bind(this);
  }

  removeContact(){
    this.props.removeContact(this.props._id);
  }

  render(){
    let editUrl = '/edit/' + this.props._id;

    return(
      <div className="contact-box">
        <div className="container clearfix">
          <div className="left">
            <div className="info">
              <p><span className="key">Name:</span> <span className="value">{this.props.name}</span></p>
              <p><span className="key">Phone:</span> <span className="value">{this.props.phone}</span></p>
            </div>
            <div className="btn-margin">
              <button className="remove-btn" onClick={this.removeContact}>Remove</button>
            </div>
          </div>
          <div className="right">
            <img src={ContactIcon} alt="Can't load icon" />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CreateContactIcon extends React.Component{
  render(){
    return(
      <div className="create-contact-icon">
        <Link to="/create">+</Link>
      </div>
    );
  }
}

export default CreateContactIcon;

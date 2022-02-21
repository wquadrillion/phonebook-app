import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CreateContact extends React.Component{
    constructor(props){
        super(props);

        this.saveContact = this.saveContact.bind(this);
    }

    saveContact(e){
        let p = document.getElementById('msg');
        p.style.color = 'rgb(221, 20, 20)';

        // validation
        if(this.refs.name.value != '' &&
           this.refs.phone.value != ''){

            let newContact = {
                name: this.refs.name.value,
                phone: this.refs.phone.value,
                _id: Math.floor(Math.random() * 1000000)
            };

            // if we wanted to save to database this is where we would interact with our api
            this.props.addContact(newContact);
            
            p.innerText = 'Contact saved';

            e.preventDefault();
        } else {
            p.innerText = 'Please fill all inputs';
        }
    }
    
    render(){
        return(
            <div className="layout">
                <h1>Create Contact</h1>
                <hr />
                <form id="contactForm" onSubmit={this.saveContact}>
                    <div className="form-box">
                        <label>Fullname: (First Name & Last Name)</label>
                        <input type="text" ref="name" placeholder="John Deo" />
                    </div>
                    <div className="form-box">
                        <label>Phone</label>
                        <input type="number" ref="phone" placeholder="07036650669" />
                    </div>
                </form>
                <div className="btn-margin">
                    <button type="submit" form="contactForm" className="save-btn">Save</button>
                    <Link to="/" className="edit-btn"><span>&larr;</span>Back</Link>
                </div>
                <p id="msg"></p>
            </div>
        );
    }
}

export default CreateContact;
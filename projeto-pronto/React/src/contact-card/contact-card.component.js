import React, { Component } from 'react';
import './contact-card.component.css'
import img from './57.jpg'

class ContactCardComponent extends Component {
    render() {
        return (

            <div className="card">
                <div className="left-content">
                    <div className="card-thumb">
                        <img src={this.props.picture}></img>
                    </div>
                    <span className="title">{this.props.title}</span><br />
                    <span className="fullName">{this.props.fullName.toUpperCase()}</span>
                </div>


                <div className="right-content">
                    <span className="cell"><i className="fas fa-mobile-alt"></i> {this.props.cell}</span><br />
                    <span className="phone"><i className="fas fa-phone"></i> {this.props.phone}</span><br />
                    <span className="email"><i className="fas fa-envelope"></i> {this.props.email}</span><br />
                </div>
            </div >
        )
    }
}
export default ContactCardComponent
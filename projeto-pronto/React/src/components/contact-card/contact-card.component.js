import React, { Component } from 'react';
import './contact-card.component.css'
import img from './57.jpg'

class ContactCardComponent extends Component {
    render() {
        return (

            <div className="visit-card">
                <div className="left-content">
                    <div className="thumbnail">
                        <img src={this.props.picture} />
                    </div>
                    <div className="name-surname-job">
                        <span className="job">{this.props.title}</span>
                        <hr className="bar-left" />
                        <span className="name-surname"><b>{this.props.fullName.toUpperCase()}</b></span>
                        <br></br>
                    </div>
                </div>

                <div className="right-content">
                    <table>
                        <tr>
                            <td className="td-icon">
                                <div className="icon-info"><i className="icon fa fa-phone fa-2x"></i></div>
                            </td>

                            <td className="td-text">
                                <div className="text-info" >{this.props.cell}</div>
                            </td>
                        </tr>


                        <tr>
                            <td className="td-icon">
                                <div className="icon-info"><i className="icon fa fa-envelope fa-2x"></i></div>
                            </td>
                            <td className="td-text">
                                <div className="text-info" >{this.props.email}</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td-icon">
                                <div className="icon-info"><i className="icon fa fa-folder-open fa-2x"></i></div>
                            </td>
                            <td className="td-text">
                                <div className="text-info" >github.com/project</div>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>

        )
        {/* <div className="card">
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
            </div > */}

    }
}
export default ContactCardComponent
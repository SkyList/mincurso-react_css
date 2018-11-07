import React, { Component } from 'react';
import './search.component.css';
import defaultService from '../helpers/service/default.service';

class SearchComponent extends Component {

    fetchContacts = (e) => {
        defaultService.getContactsAll()
            .then(res => {
                this.props.setListContacts(res.data.results)
            })
    }


    render() {
        return (
            <div className="search-box">
                <div className="search-field">
                    <input type="text" className="search-text" name="" placeholder="Pesquisar..."></input>
                    <a className="search-btn" onClick={this.fetchContacts}>
                        <i className="fas fa-search"></i>
                    </a>
                </div>
            </div>
        )
    }
}
export default SearchComponent
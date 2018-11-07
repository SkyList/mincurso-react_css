import React, { Component } from 'react';
import './search.component.css';
import defaultService from '../helpers/service/default.service';

class SearchComponent extends Component {

    fetchContacts = (e) => {
        console.log(this.props.listOfContacts)
        const teste = this.props.listOfContacts.filter(it => it.name.first.includes('ana'))
        console.log(teste)
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
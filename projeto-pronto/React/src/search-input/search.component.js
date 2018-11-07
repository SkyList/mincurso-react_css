import React, { Component } from 'react';
import './search.component.css';
import defaultService from '../helpers/service/default.service';

class SearchComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
    }

    filterContacts = (e) => {
        this.props.callbackfilterContacts(
            this.props.listOfContacts.filter(it => (
                it.name.first.includes(this.state.searchText)
                || it.name.last.includes(this.state.searchText)
                || it.cell.includes(this.state.searchText))
            )
        )
    }


    render() {
        return (
            <div className="search-box">
                <div className="search-field">
                    <input type="text" className="search-text" onChange={(e) => this.setState({ searchText: e.target.value })} placeholder="Pesquisar..."></input>
                    <a className="search-btn" onClick={this.filterContacts}>
                        <i className="fas fa-search"></i>
                    </a>
                </div>
            </div>
        )
    }
}
export default SearchComponent
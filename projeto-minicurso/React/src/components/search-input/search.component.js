import React, { Component } from 'react';
import './search.component.css';

class SearchComponent extends Component {

    //#region contrutor
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
    }
    //#endregion

    //#region FILTRO DE CONTATOS PROCURAND SE ELE CONTAIN O QUE FOI DIGITADO NO NOME E NUMERO
    filterContacts = (e) => {
        this.props.callbackfilterContacts(
            this.props.listOfContacts.filter(it => (
                it.name.first.includes(this.state.searchText)
                || it.name.last.includes(this.state.searchText)
                || it.cell.includes(this.state.searchText))
            )
        )
    }
    //#endregion


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
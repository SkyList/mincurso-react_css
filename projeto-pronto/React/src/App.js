import React, { Component } from 'react';
import './App.css';

import SeachComponent from './components/search-input/search.component'
import ContactCardComponent from './components/contact-card/contact-card.component';
import DefaultService from './helpers/service/default.service';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listContacts: [],
    }

    //#region busca na api os contatos
    DefaultService.getContactsAll()
      .then(res => {
        this.setState(
          { listContacts: res.data.results })
      })
    //#endregion
  }

  //#region calback que modifica a lista de contatos
  fillList = (value) => this.setState({ listContacts: value })
  //#endregion


  //#region metodo que preenche o card
  renderContact = (item, index) =>
    <ContactCardComponent
      key={index}
      picture={item.picture.medium}
      title={item.name.title}
      fullName={`${item.name.first} ${item.name.last}`}
      cell={item.cell}
      phone={item.phone}
      email={item.email}>
    </ContactCardComponent>
  //#endregion


  render() {
    return (
      <div className="app">
        <div className="app-header">
          <SeachComponent listOfContacts={this.state.listContacts} callbackfilterContacts={this.fillList}></SeachComponent>
        </div>
        <div className="cards">
          {
            this.state.listContacts.map(this.renderContact)
          }
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import SeachComponent from './search-input/search.component'
import ContactCardComponent from './contact-card/contact-card.component';
import DefaultService from './helpers/service/default.service';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listContacts: [],
    }
    DefaultService.getContactsAll()
      .then(res => {
        this.setState(
          { listContacts: res.data.results })
      })
  }

  fillList = (value) => {
    console.log('lista dentro do child search', value)
    this.setState({ listContacts: value })
  }

  renderContact = (item) =>
    <ContactCardComponent
      picture={item.picture.medium}
      title={item.name.title}
      fullName={`${item.name.first} ${item.name.last}`}
      cell={item.cell}
      phone={item.phone}
      email={item.email}>
    </ContactCardComponent>


  render() {
    return (
      <div className="app">
        <div className="app-header">
          <SeachComponent listOfContacts={this.state.listContacts} callbackfilterContacts={this.fillList}></SeachComponent>
          <button type="button">Fetch</button>
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

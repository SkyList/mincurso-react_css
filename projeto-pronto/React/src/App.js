import React, { Component } from 'react';
import './App.css';

import SeachComponent from './search-input/search.component'
import ContactCardComponent from './contact-card/contact-card.component';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listContacts: []
    }
  }

  fillList = (value) => {
    console.log('lista dentro do child search', value)
    this.setState({ listContacts: value })
  }

  renderContact = (item) => {
    return (

      <ContactCardComponent picture={item.picture.medium} title={item.name.title} fullName={`${item.name.first} ${item.name.last}`} cell={item.cell} phone={item.phone} email={item.email}></ContactCardComponent>
    )
  }

  render() {
    return (
      <div className="App">

        <SeachComponent listOfContacts={this.state.listContacts} setListContacts={this.fillList}></SeachComponent>
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

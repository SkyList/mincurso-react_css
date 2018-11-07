import React, { Component } from 'react';
import './App.css';

import SeachComponent from './components/search-input/search.component'
import ContactCardComponent from './components/contact-card/contact-card.component';
import DefaultService from './helpers/service/default.service';

class App extends Component {

  render() {
    return (
      <div className="app">
        //#region  HEADER
        <div className="app-header">
        //SOME CODE
        </div>
        //#endregion

        //#region LISTA DE CARTÕES
        <div className="cards">
        //SOME CODE

        </div>
      //#endregion
      </div>
    );
  }
}

export default App;

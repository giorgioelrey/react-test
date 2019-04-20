import React, { Component } from 'react';
import './App.css';
import ListaFilm from './ListaFilm';

class App extends Component {

  render() {

    console.log('sto renderizzando il componente');
    console.log(this.props);

    return (
      <div className="App">
        <h1>Ciao {this.props.name}</h1>

        <p>Stiamo studiando {this.props.materia}</p>

        <ListaFilm />

      </div>
    );
  }
}

//un placeholder di dati
App.defaultProps = {
  name: 'Giorgio',
  materia: 'React'
}

export default App;

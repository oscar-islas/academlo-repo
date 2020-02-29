import React, {Component} from 'react';
import Header from './components/header/header-component';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      personas: ["José", "Luis", "Rodrigo", "Alberto"],
      nuevoUsuario: ""
    }
  }

  agregarPersona = () => {
    let Arraypersonas = this.state.personas;
    Arraypersonas.push(this.state.nuevoUsuario);
    this.setState({personas: Arraypersonas});
  }


  nuevoUsuario = (evento) => {  
    console.log(evento.target.value);
    this.setState({nuevoUsuario:  evento.target.value});
  }


  render(){
    return (
      <div className="App">
        <Header 
          titulo="Panel de Usuarios" 
          parrafo=""
        />
        {this.state.personas.map((persona) => {
          return (
            <h3>{persona}</h3>
          );
        })}     
        <input onChange={this.nuevoUsuario} />
        <button onClick={this.agregarPersona}>
          Agregar persona
        </button>
      </div>
    );
  }
}

export default App;

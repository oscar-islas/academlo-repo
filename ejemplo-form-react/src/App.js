import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        lastName: "",
        email: ""
      }
    };
  }

  updateUser = event => {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value }
    });
  };

  render() {
    let { name, lastName, email } = { ...this.state.user };

    // let inputName = 'lastName';

    // let estado = {
    //   name: '',
    //   lastName: 'Luis'
    // }

    // estado[inputName] = 'Hernandez';

    return (
      <div className="App">
        <form onSubmit={() => console.log("Enviando datos...")}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={e => this.updateUser(e)}
            name="name"
          />
          <input
            type="text"
            placeholder="Apellidos"
            value={lastName}
            onChange={this.updateUser}
            name="lastName"
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={this.updateUser}
            name="email"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

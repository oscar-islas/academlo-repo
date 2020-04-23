import React from "react";
import "./styles.css";
import store from "./redux/store";
import { setUser, addUser } from "./redux/user/user-actions";
export default function App() {
  let { name, lastName, email } = store.getState().user.data;

  let user = store.getState().user.usuarios;

  const onchangeInput = e => {
    console.log(e.target.name, e.target.value);
    store.dispatch(setUser(e.target.name, e.target.value));
  };

  return (
    <div className="App">
      <h1>Formulario React + Redux</h1>
      <form
        className="form-container"
        onSubmit={event => {
          event.preventDefault();
          store.dispatch(addUser());
        }}
      >
        <input
          type="text"
          value={name}
          placeholder="nombre"
          name="name"
          onChange={onchangeInput}
        />
        <input
          type="text"
          value={lastName}
          placeholder="apellidos"
          name="lastName"
          onChange={onchangeInput}
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          name="email"
          onChange={onchangeInput}
        />
        <input type="submit" value="Enviar" />
      </form>
      <div>
        <h2>Datos a enviar:</h2>
        {JSON.stringify(store.getState().user.data)}
        {user.map(data => (
          <div>
            {data.name} {data.lastName} {data.email}
            <button>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import {gProvider, fProvider} from '../firebase/firebase-config';

export default function HomeView(props){
    let {signIn, login, logout, register} = props;
    return (
        <div className="App">
            <div className="register">
                <button onClick={() => signIn(gProvider)}>Seguir con Google</button>
                <button onClick={() => signIn(fProvider)}>Seguir con Facebook</button>
                <button onClick={logout}>Cerrar Sesión</button>
                <h2>Registro con Email</h2>
                <form onSubmit={ (e) => { e.preventDefault(); register('luis_02@gmail.com', '123456')}}>
                <input type="email" name="email" placeholder="Ingresa tu email" />
                <input type="password" name="password" placeholder="Ingresa tu contraseña" />
                <button type="submit">Registro</button>
                </form>      
            </div>
            <div className="login">
                <form onSubmit={ (e) => { e.preventDefault(); login('luis_02@gmail.com', '123456') } }>
                <input type="email" name="email" placeholder="Ingresa tu email" />
                <input type="password" name="password" placeholder="Ingresa tu contraseña" />
                <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
}
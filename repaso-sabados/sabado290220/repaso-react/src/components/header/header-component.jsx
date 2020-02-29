import React from 'react';

function Header(props){
    return(
        <header>
            <h1>Hola</h1>
            <h1>{props.titulo}</h1>
            <p>{props.parrafo}</p>
        </header>
    );
};

export default Header;

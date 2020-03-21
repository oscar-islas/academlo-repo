import React from 'react';
import {useParams} from 'react-router-dom';

export default function User(){
    let { userId } = useParams();

    if(Number(userId) === 20){
        return(
            <h2>Bienvenido Usuario</h2>
        )
    }else{
        return(
            <h2>Id de usuario incorrecto</h2>
        )
    }
    
}
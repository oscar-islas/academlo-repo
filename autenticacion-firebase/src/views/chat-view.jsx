import React, {useEffect} from 'react';
import auth, {db} from '../firebase/firebase-config';

export default function ChatView(props){

    useEffect(() => {
        var docRef = db.collection("users").doc("7Yyqi7qIe3WseP3mADYO2c4FFOB2");

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    })

    return (
        <>
            {JSON.stringify(auth.currentUser)}
            <h1>Estamos en la vista del chat</h1>
            <button onClick={props.logout}>Cerrar Sesión</button>
        </>
    )
}
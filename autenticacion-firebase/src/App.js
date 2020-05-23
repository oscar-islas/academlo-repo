import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import auth, {db} from './firebase/firebase-config';
import HomeView from './views/home-view';
import ChatView from './views/chat-view';


function App() {

  let [firebaseState, setFirebaseState] = useState(false);
  let [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        setCurrentUser(user.providerData[0]);
      } else {
        console.log("El usuario no está loggeado en la aplicación");
      }
      setFirebaseState(true);
    });
  }, []);

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
  }, [])

  const register = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then( response => {
      console.log(response);
    } ).catch( error => {
      console.log(error);
    })
  }

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then( response => {
      console.log(response);
    }).catch( error => {
      console.log(error);
    })
  }

  const logout = () => {
    auth.signOut().then(function() {
      setCurrentUser(false);
      console.log("Se ha cerrado sesión correctamente");
    }).catch(function(error) {
      console.log(error);
    });
  }

  const signIn = (provider) => {
    auth.signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token, user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorCode, errorMessage);
    });
  }

  if(!firebaseState){
    return (<div>Cargando...</div>);
  }else{
    return currentUser ? (<ChatView logout={logout} />) : (<HomeView register={register} signIn={signIn} logout={logout} login={login} />);
  }
}
export default App;

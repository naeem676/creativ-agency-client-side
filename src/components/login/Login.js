import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from "../../logos/logo.png";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


library.add(fab);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogle = () => {
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    
    const user = result.user;
    setLoggedUser(user);
    handleIdToken();
    history.replace(from);

    // ...
  }).catch((error) => {
    // Handle Errors here.
    setLoggedUser(error)
  });
    }
    const handleIdToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        // Send token to your backend via HTTPS
        sessionStorage.setItem('token', idToken)
      }).catch(function(error) {
        // Handle error
      });
      
    }
    return (
        <div>
        <div className="container text-center  p-5">
            <img className="w-25" src={logo} alt="" srcset=""/>
        </div>
            <div className="container border border-info  w-25 text-center pt-5 pb-5 mt-5">
            <button onClick={handleGoogle} type="button" class="btn btn-outline-info "><FontAwesomeIcon icon={['fab', 'google']} /> Continue with google</button>
            </div>
        </div>
    );
};

export default Login;
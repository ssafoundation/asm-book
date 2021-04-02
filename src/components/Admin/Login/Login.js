import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';

import firebase from "firebase/app";
import 'firebase/auth'
import firebaseConfig from '../../../firebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                var user = result.user;
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    URL: user.photoURL
                }
                setLoggedInUser(userData)
                history.replace(from)
            }).catch((error) => {

                // var errorCode = error.code;
                // var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;
                // ...
            });
    }
    // console.log(loggedInUser);
    return (
        <div>
            <div className="social-area">
                <div className="login-profile">
                    <img src={loggedInUser.URL} alt="" />
                    <div className="account-details">
                        <h1>{loggedInUser.name}</h1>
                        <p>{loggedInUser.email}</p>
                    </div>
                </div>

                <div className="social-account-wrap">
                    <button className="btn btn-primary" onClick={handleGoogleSignIn}><span>Continue with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
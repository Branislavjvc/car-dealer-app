import React, { useState } from "react";
import { UncontrolledAlert, Button, Table} from "reactstrap";
import "./SignIn.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


function hideProfileNavLink() {
  document.getElementById("profileNavLink").style.display= "none"; 
}

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCplVPoS7HOtZXMwgxFMwprd955PRb4ru8",
    authDomain: "car-dealer-app-536d8.firebaseapp.com",
    databaseURL: "https://car-dealer-app-536d8.firebaseio.com",
    projectId: "car-dealer-app-536d8",
    storageBucket: "car-dealer-app-536d8.appspot.com",
    messagingSenderId: "117271477496",
    appId: "1:117271477496:web:b35732609796b93e810f0d"

};
firebase.initializeApp(config);

function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/Listings/' + newPostKey] = postData;
  updates['/Listings/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}


var listingID = [];
var carName = [];
var carModel = [];
var carPrice = [];
var carMileage = [];
var carFuelType = [];
var carYear = [];

var database = firebase.database();

class SignInScreen extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      
    ]
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1 id="signInHeader">Sign In</h1>
          <p id="signInParagraph">Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (

      <div>

      <UncontrolledAlert id="welcomeAlert" color="success">Welcome {firebase.auth().currentUser.displayName} !</UncontrolledAlert>

      <h1 id="profileHeader">User Profile</h1>

      <Table responsive>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active Listings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{firebase.auth().currentUser.uid}</th>
          <td>{firebase.auth().currentUser.displayName}</td>
          <td>{firebase.auth().currentUser.email}</td>
          <td></td>
        </tr>

      </tbody>
    </Table>

    <Button id="submitButton" color="primary" onClick={writeNewPost}>Submit Listing</Button> 
        <Button id="signInButton" color="danger" onClick={() => firebase.auth().signOut()}>Sign-out</Button>

      </div>
    );
  }
}

export default SignInScreen;
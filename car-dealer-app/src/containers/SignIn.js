import React, { useState } from "react";
import { UncontrolledAlert, Button, ButtonGroup, Table, Card, CardBody, Form, FormGroup, FormText, Label, Col, Input, Row, UncontrolledDropdown, CustomInput, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import "./SignIn.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
//copy firebase config here
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

  componentDidUpdate() {
    
    //document.getElementById("signInNavLink").style.display = "none";
    document.getElementById("profileNavLink").style.display = "block";
    document.getElementById("signInNavLink").style.display = "none";
    document.getElementById("signInButtonNav").style.display ="block";
    document.getElementById("signInButtonNav").onclick = () => firebase.auth().signOut();
    document.getElementById("dataTable").style.display = "none";

    function validateForm() {
      var x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    } 

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

    <h1 id="submitListingHeader">Submit a new listing:</h1>
      <Card>
        <CardBody>
        <Form>
      
      <Row>
        <Col sm={2}>
        <FormGroup>
        <Label for="carMakeInput">Car Make</Label>
        <Input type="text" name="make" id="carMakeInput" placeholder="Volkswagen"/>
      </FormGroup>
      </Col>
         
      <Col sm={2}>
        <FormGroup>
        <Label for="carModelInput">Car Model</Label>
        <Input type="text" name="model" id="carModelInput" placeholder="Golf"/>
      </FormGroup>
      </Col>
          
      <Col sm={2}>
      <FormGroup>
        <Label for="adressInput">Address</Label>
        <Input type="text" name="adress" id="adressInput" placeholder="1234 Main St"/>
      </FormGroup>
      </Col>

      <Col sm={2}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="New York"/>
          </FormGroup>
</Col>

          <Col sm={2}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" placeholder="New York"/>
          </FormGroup>
</Col>

<Col sm={2}>
      <UncontrolledDropdown>
      <DropdownToggle caret color="primary">
        Fuel Type
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Petrol</DropdownItem>
        <DropdownItem>Diesel</DropdownItem>
        <DropdownItem>Electric</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
</Col>

    <Col sm={2}>
      <FormGroup>
        <Label for="mileage">Mileage</Label>
            <Input type="text" name="mileage" id="mileage" placeholder="10,000"/>
      </FormGroup>
</Col>

      <Col sm={10}>
      <FormGroup row>
        <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
</Col>
</Row>
      <FormGroup row>
        <Label for="exampleFile">Photos</Label>

          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Adding atleast one image is necessary.
          </FormText>

          <FormGroup check>
        <Label for="checkbox2">T&C</Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              I agree with the <a href="/">T&C</a>
            </Label>
          </FormGroup>

      </FormGroup>
      <Form action="http://google.com">
    <Input type="submit" value="Go to Google" />
</Form>
    </Form>
        </CardBody>
      </Card>
        

      </div>
    );
  }
}

export default SignInScreen;

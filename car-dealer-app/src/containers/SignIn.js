import React, { useState } from "react";
import { UncontrolledAlert, Button, Table, Card, CardBody, Form, FormGroup, FormText, Label, Col, Input, Row} from "reactstrap";
import "./SignIn.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  
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
      <Row form>
        <Col md={6}>
          <FormGroup>
          <Label for="exampleSelect">Car Model</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Model 3</option>
          <option>Model S</option>
          <option>Model X</option>
          <option>Model Y</option>
          <option>Roadster</option>
          <option disabled>Cybertruck - Coming Soon!</option>
        </Input>
          </FormGroup>
          </Col>
        <Col md={6}>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Adding an image is necessary.
            .
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Radio Buttons</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio2" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="checkbox2" sm={2}>T&C</Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              I agree with the <a href="/Terms & Conditions">T&C</a>
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
        </CardBody>
      </Card>
        

      </div>
    );
  }
}

export default SignInScreen;

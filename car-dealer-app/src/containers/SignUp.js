import React, { useState } from "react";
import { Button, FormGroup, Label, Input} from "reactstrap";
import "./SignUp.css";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
      <h1 id="loginHeader">Sign Up</h1>
      <FormGroup controlId="firstName" bsSize="large">
        <Label>First Name:</Label>
        <Input type="text" name="firstName" placeholder="John" />
        </FormGroup>
        <FormGroup controlId="lastName" bsSize="large">
        <Label>Last Name:</Label>
        <Input type="text" name="lastName" placeholder="Doe" />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
        <Label for="exampleEmail">Email:</Label>
        <Input type="email" name="email" placeholder="example@gmail.com" />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Label>Password:</Label>
          <Input type="password" name="password" placeholder="password" />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

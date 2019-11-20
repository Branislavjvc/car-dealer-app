import React from "react";
import "./NotFound.css";
import { Jumbotron, Container } from 'reactstrap';

export default function NotFound() {
  return (
    <div className="NotFound">
<Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">🚧 🚗</h1>
          <p className="lead">This is a 404 page. There are no cars here. </p>
          <a href="/">Take me home</a>
        </Container>
      </Jumbotron>
    </div>
  );
}

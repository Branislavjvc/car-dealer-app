import React, {useState} from "react";
import "./Home.css";
import { Pagination, PaginationItem, PaginationLink, Table, Jumbotron, Container} from 'reactstrap';

var listingID = [];
var carName = [];
var carModel = [];
var carPrice = [];
var carMileage = [];
var carFuelType = [];
var carYear = [];

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">

        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Car Dealer App</h1>
          <p className="lead">A car selling platform with React </p>
        </Container>
      </Jumbotron>

<Table responsive bordered hover>
      <thead>
        <tr>
          <th>Listing ID</th>
          <th>Name</th>
          <th>Model</th>
          <th>Fuel Type</th>  
          <th>Year</th>
          <th>Mileage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0001</td>
          <td>Bmw</td>
          <td>320d</td>
          <td>Diesel</td>
          <td>2010</td>
          <td>50,000</td>
        </tr>
        <tr>
          <td>0002</td>
          <td>Fiat</td>
          <td>Panda</td>
          <td>Petrol</td>
          <td>2012</td>
          <td>40,000</td>
        </tr>
        <tr>
          <td>0003</td>
          <td>Tesla</td>
          <td>X</td>
          <td>Electric</td>
          <td>2015</td>
          <td>5,000</td>
        </tr>
      </tbody>
    </Table>

    <Pagination>
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>

      </div>
    </div>
  );
}

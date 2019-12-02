import React, {useState} from "react";
import "./Home.css";
import {Button, Pagination, PaginationItem, PaginationLink, Table, Jumbotron, Container} from 'reactstrap';

var countTableRows = ('#myTable tr').length;

function addListing() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL3";
  cell4.innerHTML = "NEW CELL4";
  cell5.innerHTML = "NEW CELL5";
  cell6.innerHTML = "NEW CELL6";
}

function rmListing() {
  var table = document.getElementById("myTable");
  if (countTableRows > 0) {
    table.deleteRow(0);
  }

}

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

<Button color="primary" onClick={addListing}>Add Listing</Button>
<Button onClick={rmListing}>Remove Listing</Button>

<Table id="myTable" responsive bordered hover>
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

import React, {useState} from "react";
import "./Home.css";
import {Button, Pagination, PaginationItem, PaginationLink, Table, Jumbotron, Container} from 'reactstrap';
  

/*
Listing expiration 

Test:

<p id="x">Click "Try it". Wait 1 second, and see the magic happen.</p>

<button onclick="setTimeout(myFunction, 1000);">Try it</button>

<script>
function myFunction() {
   x.style.display = "none";
}
</script>


*/

var ids = ["0001", "0002", "0003"];
var names = ["Bmw", "Fiat", "Tesla"];
var models = ["320d", "Panda", "X"];
var fuelTypes = ["Gasoline", "Diesel", "Electric"];
var years = ["2010", "2012", "2018"];
var mileages = ["50,000", "40,000", "5000"]; 
var listingsTotal = 3;

var sorted = 0;

function inc() {
sorted += 1;
}

function dec() {
  sorted -= 1;
}

function sortTable() {

 
  if (sorted == 1){
    ids.sort();
  document.getElementById("demo").innerHTML = ids;
  dec();
  }
  
  else
  {
    ids.sort(function(a, b){return b-a});
    document.getElementById("demo").innerHTML = ids;
    inc();
  }

}

function addListing() {
  var table = document.getElementById("tableRow");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = "Listing ID";
  cell2.innerHTML = "Name";
  cell3.innerHTML = "Model";
  cell4.innerHTML = "Fuel Type";
  cell5.innerHTML = "Year";
  cell6.innerHTML = "Mileage";
  listingsTotal += 1;
  document.getElementById('listingCounter').innerHTML = 'Active Listings: ' + listingsTotal;
}

function rmListing() {
  var table = document.getElementById("tableRow");
  table.deleteRow(0);
  listingsTotal -= 1;
  document.getElementById('listingCounter').innerHTML = 'Active Listings: ' + listingsTotal;
}


export default function Home() {
  return (
    <div className="Home">
      <div className="lander">

        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 fade-in">Car Dealer App</h1>
          <p className="lead fade-in">A car selling platform with React </p>
          <p id="listingCounter" className="fade-in">Active Listings: {listingsTotal}</p>
        </Container>
      </Jumbotron>

<Button color="primary" onClick={addListing}>Add Listing</Button>
<Button onClick={rmListing}>Remove Listing</Button>
<Button onClick={sortTable}>Sort</Button>
<p id="demo"></p>

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
      <tbody id="tableRow">
        <tr>
          <td>{ids[0]}</td>
          <td>{names[0]}</td>
          <td>{models[0]}</td>
          <td>{fuelTypes[0]}</td>
          <td>{years[0]}</td>
          <td>{mileages[0]}</td>
        </tr>
        <tr>
        <td>{ids[1]}</td>
          <td>{names[1]}</td>
          <td>{models[1]}</td>
          <td>{fuelTypes[1]}</td>
          <td>{years[1]}</td>
          <td>{mileages[1]}</td>
        </tr>
        <tr>
          <td>{ids[2]}</td>
          <td>{names[2]}</td>
          <td>{models[2]}</td>
          <td>{fuelTypes[2]}</td>
          <td>{years[2]}</td>
          <td>{mileages[2]}</td>
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

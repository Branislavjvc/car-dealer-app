import './App.css';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Pagination, PaginationItem, PaginationLink, InputGroup, InputGroupText, InputGroupAddon, Input, Container, Row, Col} from 'reactstrap';

const Example = (props) => {

  return (

    <div>

    <Container id="Search">

    <Row>
<Col xs="12">
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      </Col>
</Row>
      </Container>

    <Table responsive bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Model</th>
          <th>Fuel Type</th>  
          <th>Year</th>
          <th>Mileage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>0001</td>
          <td>Bmw</td>
          <td>320d</td>
          <td>Diesel</td>
          <td>2010</td>
          <td>50,000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>0002</td>
          <td>Fiat</td>
          <td>Panda</td>
          <td>Petrol</td>
          <td>2012</td>
          <td>40,000</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>0003</td>
          <td>Tesla</td>
          <td>X</td>
          <td>Electric</td>
          <td>2015</td>
          <td>5,000</td>
        </tr>
      </tbody>
    </Table>

<Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
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
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
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

  );
}

export default Example;
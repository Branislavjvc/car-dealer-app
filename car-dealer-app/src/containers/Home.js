import React from "react";
import "./Home.css";
import {Button, Pagination, PaginationItem, PaginationLink, Table, Jumbotron, Container, UncontrolledCollapse, Card, CardBody, FormGroup, Label, Input, Row, Col, UncontrolledAlert} from 'reactstrap';

import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; 
import { ReactTabulator, reactFormatter } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";
import MultiSelectEditor from "react-tabulator/lib/editors/MultiSelectEditor";

const data = [
  {id:1, make:"Ford", model:"Mustang", mileage:"11,000", year:"1970", reg: "01/01/2021", passed: "true"},
	{id:2, make:"Chevrolet", model:"Spark", mileage:"7,000", year:"2012", reg: "06/01/2020", passed: "true"},
	{id:3, make:"Subaru", model:"Impreza", mileage:"20,000", year:"2011", reg: "01/01/2020", passed: "false"},
	{id:4, make:"Nissan", model:"Gtr", mileage:"9,000", year:"2000", reg: "07/01/2020", passed: "true"},
  {id:5, make:"Toyota", model:"Mr 2", mileage:"30,000", year:"1993", reg: "04/01/2000", passed: "false"},
  {id:6, make:"GMC", model:"Sierra", mileage:"23,000", year:"2014", reg: "01/01/2021", passed: "true"},
	{id:7, make:"Cadillac", model:"Escalade", mileage:"7,000", year:"2014", reg: "09/01/2020", passed: "true"},
	{id:8, make:"Honda", model:"Civic", mileage:"23,000", year:"2008", reg: "01/01/2020", passed: "false"},
	{id:9, make:"Honda", model:"Accord", mileage:"19,000", year:"2010", reg: "10/01/2020", passed: "true"},
  {id:10, make:"Honda", model:"Odyssey", mileage:"17,000", year:"1999", reg: "12/01/2019", passed: "false"},
  {id:11, make:"Bmw", model:"M 5", mileage:"4,000", year:"2016", reg: "01/01/2021", passed: "true"},
	{id:12, make:"Mercedes", model:"C 63", mileage:"12,000", year:"2018", reg: "01/01/2021", passed: "true"},
	{id:13, make:"Audi", model:"A 4", mileage:"25,000", year:"2012", reg: "01/01/2021", passed: "true"},
	{id:14, make:"Fiat", model:"Panda", mileage:"30,000", year:"2010", reg: "11/01/2020", passed: "true"},
	{id:15, make:"Tesla", model:"Model X", mileage:"7,000", year:"2018", reg: "03/01/2020", passed: "true"},
];  

const editableColumns = [
  {
    title: "Make",
    field: "make",
    width: 150,
    editor: "input",
    headerFilter: "input"
  },
  {
    title: "Model",
    field: "model",
    align: "left",
    formatter: "number",
    editor: "input",
  },
  {
    title: "Mileage",
    field: "mileage",
    editor: "input",
    formatter: "progress",
    sorter: "number"
  },
  {
    title: "Year",
    field: "year",
    editor: "input",
    editorParams: { format: "yyyy" }
  },
  {
    title: "Registration Date",
    field: "reg",
    editor: DateEditor,
    sorter: "number",
    editorParams: { format: "MM/dd/yyyy" }
  },
  {
    title: "Registration valid",
    field: "passed",
    align: "center",
    formatter: "tickCross",
    editor: true
  }
];


class Home extends React.Component {
 state = {
    data: [],
    selectedName: ""
  };
  ref = null;

  columns = [
    { title: "Make", field: "make", width: 150 },
    { title: "Model", field: "model", width: 150 },
    { title: "Year", field: "year" },
    {
      title: "Valid Registration",
      field: "passed",
      align: "center",
      formatter: "tickCross"
    },
  ];

  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log("rowClick id: ${row.getData().id}", row, e);
    this.setState({ selectedName: row.getData().name });
  };

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    const options = {
      height: 350,
      layout:"fitColumns",
      movableRows: true,
      history: true,
      pagination:'local',
      paginationSize: 6,
      addRowPos:"top",
    };

    return (
    <div className="Home">
      <div className="lander">

        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 fade-in">Car Dealer App</h1>
          <p className="lead fade-in">A car selling platform with React </p>
        </Container>
      </Jumbotron>
      </div>

      <div>
      <div>
        <button class="btn btn-primary" id="add-row">Add Row</button>
      </div>
        <ReactTabulator
          ref={ref => (this.my_table = ref)}
          columns={editableColumns}
          data={data}
          footerElement={<span><a href="https://www.github.com/Branislavjvc" target="_blank">Find Me On Github</a></span>}
          options={options}
          tooltips={true}
        />
      </div>

    </div>
    );
  }
};
export default Home;
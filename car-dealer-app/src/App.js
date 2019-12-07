import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Button, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Routes from "./Routes";



const Example = (props) => {

  
  return (

    <div>

        <Nav tabs light>
        <NavbarBrand href="/" className="mr-auto">Car Dealer App</NavbarBrand>
        <NavItem>
          <NavLink disabled id="profileNavLink" href="/Profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink id="signInNavLink" href="/Profile">Sign In</NavLink>
          <Button id="signInButtonNav" color="danger" >Sign-out</Button>
        </NavItem>
      </Nav>

      <Routes />



</div>

  );
}

export default Example;
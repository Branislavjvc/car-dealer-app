import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Routes from "./Routes";


const Example = (props) => {


  return (

    <div>

        <Nav tabs light>
        <NavbarBrand href="/" className="mr-auto">Car Dealer App</NavbarBrand>
        <NavItem>
          <NavLink id="profileNavLink" href="/Profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink id="signInNavLink" href="/Sign-in">Sign In</NavLink>
        </NavItem>
      </Nav>

      <Routes />

      

</div>

  );
}

export default Example;
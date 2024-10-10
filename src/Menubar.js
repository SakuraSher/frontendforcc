import React from "react";
import {Navbar,Nav,NavDropdown } from 'react-bootstrap';
function MenuBar() {
    return(
        <Navbar bg="light" expand="lg">
         <Navbar .Brand href="#home">Home</Navbar .Brand>
         <Navbar .Toggle  aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
          <NavDropdown title="Option 1" id="option1-dropdown">
            <NavDropdown.Item href="#action/1.1">Action 1.1</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">Action 1.2</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">Action 1.3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Option 2" id="option2-dropdown">
            <NavDropdown.Item href="#action/2.1">Action 2.1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">Action 2.2</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">Action 2.3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Option 3" id="option3-dropdown">
            <NavDropdown.Item href="#action/3.1">Action 3.1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Action 3.2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Action 3.3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Option 4" id="option4-dropdown">
            <NavDropdown.Item href="#action/4.1">Action 4.1</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">Action 4.2</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">Action 4.3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Option 5" id="option5-dropdown">
            <NavDropdown.Item href="#action/5.1">Action 5.1</NavDropdown.Item>
            <NavDropdown.Item href="#action/5.2">Action 5.2</NavDropdown.Item>
            <NavDropdown.Item href="#action/5.3">Action 5.3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      
         </Navbar.Collapse>
       
        </Navbar>

    );
  }

  export default MenuBar;
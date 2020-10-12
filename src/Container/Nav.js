import React,{Fragment} from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import '../App.css';
import PropTypes from 'prop-types';



const Navpane = ({Logoname,Home,About,Icon})=>{
  return(
    <Fragment>
     <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"><i className={Icon}></i>{Logoname}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">{Home}</Nav.Link>
      <Nav.Link href="#features">{About}</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </Fragment>

  )
}

Navpane.propTypes ={
  Logoname: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired
}
Navpane.defaultProps = {
  Logoname: 'Github Finder',
  Home: 'Home',
  About: 'About',
  Icon:'fab fa-github'
}

export default Navpane;
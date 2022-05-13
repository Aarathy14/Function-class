import React from 'react'
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin, BsBehance } from "react-icons/bs";

function Navy() {
  return (
    <div><Navbar bg="light" expand="lg" className='shadow-lg p-1 mb-5 bg-white rounded'>  
    <Container>
      <Navbar.Brand className= '  col-5 d-flex '><h3>Codding </h3> &nbsp; <h3 className='text-info'>Addict </h3> </Navbar.Brand>
  

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className= "me-auto margin-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Project">Project</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          <Nav.Link href="#Profile">Profile</Nav.Link>
          

        </Nav>

      </Navbar.Collapse>
    </Container>
    <nav class="px-1 pt-3 text-info text-center col-4  d-none d-lg-block">
          <BsFacebook size={15} class="mx-2" />
          <BsTwitter size={15}  class="mx-2" />
          <BsLinkedin size={15} class="mx-2" /> 
          <BsBehance size={15} class="mx-2" />
        </nav>
  </Navbar>
  </div>
  )
}

export default Navy
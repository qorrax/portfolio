
// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';





import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    

//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Abdulkadir </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0 pb-3 pb-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">About</Nav.Link>
//             <Nav.Link href="#action2">Projects</Nav.Link>
//             <Nav.Link href="#action2">Skills</Nav.Link>
//             <Nav.Link href="#action2">Contact</Nav.Link>
//         </Nav>
        
//                 {/* <Form className="d-flex">
//                     <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                     />
//                     <Button variant="outline-success">Search</Button>
//                 </Form> */}
//                 </Navbar.Collapse>
//             </Container>
//             </Navbar>
//   );
// }


const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        expanded={expanded}
        className="sticky-top" // Make the Navbar sticky
      >
        <Container>
          <Navbar.Brand href="#home">Abdull Dev</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-20"> {/* Use "ml-auto" to move the Nav elements to the right */}
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/skills">
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// function MyNavbar() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand as={Link} to="/Home">ComputerSeekho</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/Home">Home</Nav.Link>
//             <NavDropdown title="Placement" id="collapsible-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/BatchwisePlacementPage">Batchwise Placements</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/OurRecruitersPage">Our Recruiters</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/Company">Our Company</NavDropdown.Item>
//             </NavDropdown>

//             <NavDropdown title="Courses" id="collapsible-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/PgdacPage">PG DAC</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/PgDbdaPage">PG DBDA</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/PreCat">Pre CAT</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/MscitPage">MSCIT</NavDropdown.Item>

//             </NavDropdown>

//             <Nav.Link as={Link} to="/CampusLife">Campus Life</Nav.Link>
//             <Nav.Link as={Link} to="/FacultyPage">Faculty</Nav.Link>
//             <Nav.Link as={Link} to="/GetInTouch">Get In Touch</Nav.Link>
            
//             {/* New "Login" link with dropdowns */}
//             {/* <NavDropdown title="Login" id="login-dropdown"> */}
//               {/* <NavDropdown.Item as={Link} to="/AdminLogin">Admin Login</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/StaffLogin">Staff Login</NavDropdown.Item> */}
//             {/* </NavDropdown> */}

//             <Nav.Link as={Link} to="/LoginPage">Login</Nav.Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// export default MyNavbar;



import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./MyNavbar.css";
function MyNavbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const getLinkStyle = (link) => {
    return {
      color: activeLink === link ? 'Black' : '', // Change color when active
      fontWeight: activeLink === link ? 'bold' : '' // Make text bold when active
    };
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/Home">ComputerSeekho</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/Home"
              style={getLinkStyle('/Home')}
              onClick={() => handleLinkClick('/Home')}
            >
              Home
            </Nav.Link>
            <NavDropdown title="Placement" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/BatchwisePlacementPage"
                style={getLinkStyle('/BatchwisePlacementPage')}
                onClick={() => handleLinkClick('/BatchwisePlacementPage')}
              >
                Batchwise Placements
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/OurRecruitersPage"
                style={getLinkStyle('/OurRecruitersPage')}
                onClick={() => handleLinkClick('/OurRecruitersPage')}
              >
                Our Recruiters
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/Company"
                style={getLinkStyle('/Company')}
                onClick={() => handleLinkClick('/Company')}
              >
                Our Company
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Courses" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/PgdacPage"
                style={getLinkStyle('/PgdacPage')}
                onClick={() => handleLinkClick('/PgdacPage')}
              >
                PG DAC
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/PgDbdaPage"
                style={getLinkStyle('/PgDbdaPage')}
                onClick={() => handleLinkClick('/PgDbdaPage')}
              >
                PG DBDA
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/PreCat"
                style={getLinkStyle('/PreCat')}
                onClick={() => handleLinkClick('/PreCat')}
              >
                Pre CAT
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/MscitPage"
                style={getLinkStyle('/MscitPage')}
                onClick={() => handleLinkClick('/MscitPage')}
              >
                MSCIT
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/CampusLife"
              style={getLinkStyle('/CampusLife')}
              onClick={() => handleLinkClick('/CampusLife')}
            >
              Campus Life
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/FacultyPage"
              style={getLinkStyle('/FacultyPage')}
              onClick={() => handleLinkClick('/FacultyPage')}
            >
              Faculty
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/GetInTouch"
              style={getLinkStyle('/GetInTouch')}
              onClick={() => handleLinkClick('/GetInTouch')}
            >
              Get In Touch
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/Login"
              style={getLinkStyle('/Login')}
              onClick={() => handleLinkClick('/Login')}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

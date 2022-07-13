import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { routeNames } from "../../routes/routes/dashboard";
import { Search } from "../icons";

const NavBar = () => {
  console.log(routeNames);
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href={routeNames.home}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 fw-bold ">
            <Nav.Link href={"#"}>{"About A&M"}</Nav.Link>
            <Nav.Link href={"#"}>{"Expertise"}</Nav.Link>
            <Nav.Link href={"#"}>{"Insights"}</Nav.Link>
            <Nav.Link href={"#"}>{"#AMon Social"}</Nav.Link>
            <Nav.Link href={"#"}>{"Our People"}</Nav.Link>
            <Nav.Link href={"#"}>{"Global Locations"}</Nav.Link>
            <Nav.Link href={"#"}>{"Careers"}</Nav.Link>
            <Nav.Link href={"#"}>{"A&M on Covid-19"}</Nav.Link>
            {/* <Nav.Link href={"#"}>{""}</Nav.Link> */}
            {/* <Nav.Link href={routeNames.home}>{"HLS Home"}</Nav.Link>
            <Nav.Link href={routeNames.expertise}>{"Expertise"}</Nav.Link>
            <Nav.Link href={routeNames.insight}>{"Insights"}</Nav.Link>
            <Nav.Link href={routeNames.leadership}>{"Leadership"}</Nav.Link>
            <Nav.Link href={routeNames.contact}>{"Contact"}</Nav.Link> */}

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#action2">{<Search />}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

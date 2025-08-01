import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">Team Directory</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;

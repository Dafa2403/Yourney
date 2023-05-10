import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Iyourney2 } from "../../assets/logo";
import { Nav } from "react-bootstrap";
import "./styles.css";

function Navigation() {
  const [nav, setNav] = useState("");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setNav("dark");
    } else if (scrolled <= 500) {
      setNav("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="App" onScroll={scrollToTop}>
      <Navbar variant="dark" expand="lg" fixed="top" bg={nav} className="trans">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Iyourney2} height="60"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav>
              <Nav.Link href="#portofolio">Portofolio</Nav.Link>
              <Nav.Link href="#footer">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;

import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { Button, Container, Row, Col, Navbar } from "react-bootstrap";

const Header = ({ title, toggleTask, showTask }) => {
  return (
    <Navbar expand="lg" variant="dark" bg="primary">
      <Container>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        {!showTask ? (
          <FaPlusCircle
            onClick={toggleTask}
            style={{ cursor: "pointer", color: "#fff" }}
          />
        ) : (
          <FaMinusCircle
            onClick={toggleTask}
            style={{ cursor: "pointer", color: "#fff" }}
          />
        )}
      </Container>
    </Navbar>
  );
};

export default Header;

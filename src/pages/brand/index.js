import React from "react";
import "./styles.css";
import { Card, Container } from "react-bootstrap";
import { Ibangkit, Ibtp2, Igoogle2, Ikemendikbud } from "../../assets/logo";

function Brand() {
  return (
    <div className="Brand">
      <Container className="flex">
        <Card className="card">
          <Card.Title className="Ltitle">Funded by:</Card.Title>
          <Card.Body className="Lbody">
            <img src={Ikemendikbud} className="logo Ikemendikbud" />
            <img src={Igoogle2} className="logo Igoogle2" />
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Title className="Ltitle">Supported by:</Card.Title>
          <Card.Body className="Lbody">
            <img src={Ibtp2} className="logo Ibtp2" />
            <img src={Ibangkit} className="logo Ibangkit" />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Brand;

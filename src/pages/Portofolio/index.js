import React from "react";
import "./styles.css";
import { Card, Row, Col } from "react-bootstrap";
import { Iplaystore } from "../../assets/logo";
import { Ibackground } from "../../assets/bg";
import {
  Ismartphone1,
  Ismartphone2,
  Ismartphone3,
  Ismartphone4,
  Ismartphone5,
} from "../../assets/Smartphone";

function Portofolio() {
  return (
    <div
      id="portofolio"
      className="Portofolio"
      style={{
        backgroundImage: `url(${Ibackground})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <Row className="Pdesk">
        <Col className="col Pflex" sm={5}>
          <Card className="Pcard">
            <Card.Title className="Ptitle">OUR APPLICATATION</Card.Title>
            <Card.Text className="Ptext">
              lacus viverra vitae congue eu consequat ac felis donec et odio
              pellentesque diam volutpat commodo sed egestas egestas fringilla
              phasellus <br></br> ac tortor vitae purus faucibus ornare
              suspendisse sed nisi lacus sed viverra tellus in hac habitasse
              platea dictumst vestibulum rhoncus
            </Card.Text>
          </Card>
          <a
            href="https://play.google.com/store/apps/details?id=com.bangkit.yourney"
            className="Plink"
            target="_blank"
          >
            <img src={Iplaystore} className="Limg"></img>
          </a>
        </Col>
        <Col sm={7} className="col ">
          <Col className="col-img">
            <img src={Ismartphone5} className="Pimg-left1" />
            <img src={Ismartphone2} className="Pimg-right1" />
          </Col>
          <Col className="col-img">
            <img src={Ismartphone4} className="Pimg-left2" />

            <img src={Ismartphone3} className="Pimg-right2" />
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default Portofolio;

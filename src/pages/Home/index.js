import React from "react";
import "./styles.css";
import { Ibackground1 } from "../../assets/bg";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${Ibackground1})`,
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
      className="Home"
    >
      <Container className="con-tag">
        <text className="tag tag-text">MAKE YOUR JOURNEY YOURS</text>
      </Container>
    </div>
  );
}

export default Home;

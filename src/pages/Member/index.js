import React, { useEffect, useState } from "react";
import "./styles.css";
import { Alif, Aul, Roh, Daf, Ren, Coo } from "../../assets/Personil";
import { Modal, Button } from "react-bootstrap";
import Jpersonil from "./member.json";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Member() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [Name, setName] = useState([]);
  const [job, setJob] = useState([]);
  const [linkedin, setLinkedin] = useState([]);
  const [git, setGit] = useState([]);
  const [img, setImg] = useState([]);

  const handleClose = () => setShow(false);
  const arr = [];
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];

  const handleShow = () => {
    for (let i = 0; i < Jpersonil.length; i++) {
      const element = Jpersonil[i];
      arr.push(element.Name);
      arr1.push(element.Job);
      arr2.push(element.linkedin);
      arr3.push(element.github);
    }
    setShow(true);
    setName(arr[0]);
    setImg(Alif);
    setJob(arr1[0]);
    setLinkedin(arr2[0]);
    setGit(arr3[0]);
  };
  const handleShow2 = () => {
    for (let i = 0; i < Jpersonil.length; i++) {
      const element = Jpersonil[i];
      arr.push(element.Name);
      arr1.push(element.Job);
      arr2.push(element.linkedin);
      arr3.push(element.github);
    }
    setShow(true);
    setName(arr[1]);
    setImg(Aul);
    setJob(arr1[1]);
    setLinkedin(arr2[1]);
    setGit(arr3[1]);
  };
  const handleShow3 = () => {
    for (let i = 0; i < Jpersonil.length; i++) {
      const element = Jpersonil[i];
      arr.push(element.Name);
      arr1.push(element.Job);
      arr2.push(element.linkedin);
      arr3.push(element.github);
    }
    setShow(true);
    setName(arr[2]);
    setImg(Roh);
    setJob(arr1[2]);
    setLinkedin(arr2[2]);
    setGit(arr3[2]);
  };
  const handleShow4 = () => {
    for (let i = 0; i < Jpersonil.length; i++) {
      const element = Jpersonil[i];
      arr.push(element.Name);
      arr1.push(element.Job);
      arr2.push(element.linkedin);
      arr3.push(element.github);
    }
    setShow(true);
    setName(arr[3]);
    setImg(Daf);
    setJob(arr1[3]);
    setLinkedin(arr2[3]);
    setGit(arr3[3]);
  };
  const handleShow5 = () => {
    for (let i = 0; i < Jpersonil.length; i++) {
      const element = Jpersonil[i];
      arr.push(element.Name);
      arr1.push(element.Job);
      arr2.push(element.linkedin);
      arr3.push(element.github);
    }
    setShow(true);
    setName(arr[4]);
    setImg(Ren);
    setJob(arr1[4]);
    setLinkedin(arr2[4]);
    setGit(arr3[4]);
  };
  const handleShow6 = () => {
    for (let i = 0; i < Jpersonil.length; i++) {
      const element = Jpersonil[i];
      arr.push(element.Name);
      arr1.push(element.Job);
      arr2.push(element.linkedin);
      arr3.push(element.github);
    }
    setShow(true);
    setName(arr[5]);
    setImg(Coo);
    setJob(arr1[5]);
    setLinkedin(arr2[5]);
    setGit(arr3[5]);
  };

  return (
    <div className="Pgallery">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Mimg">
            <img src={img} style={{ width: "70%" }}></img>
          </div>
          <div className="name">
            <text>Name : </text>

            {Name}
          </div>
          <div className="job">
            <text>Jobdesk : </text>
            {job}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="Mfooter">
            <a className="linkedin" href={linkedin} target="_blank">
              <FaLinkedinIn size={40} />
            </a>
            <a className="git" href={git} target="_blank">
              <FaGithub size={40} color="black" />
            </a>
          </div>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="ML">
        <div
          style={{ backgroundImage: `url(${Alif})` }}
          id="alif"
          onClick={handleShow}
        ></div>
        <div
          style={{ backgroundImage: `url(${Aul})` }}
          id="aul"
          onClick={handleShow2}
        ></div>
        <div
          style={{ backgroundImage: `url(${Roh})` }}
          id="roh"
          onClick={handleShow3}
        ></div>
        <div
          style={{ backgroundImage: `url(${Daf})` }}
          id="daf"
          onClick={handleShow4}
        ></div>
        <div
          style={{ backgroundImage: `url(${Ren})` }}
          id="ren"
          onClick={handleShow5}
        ></div>
        <div
          style={{ backgroundImage: `url(${Coo})` }}
          id="coo"
          onClick={handleShow6}
        ></div>
      </div>
    </div>
  );
}

export default Member;

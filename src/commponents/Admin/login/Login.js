import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from "@coreui/react";

import { Ibackground1 } from "../../../assets/bg/index";
import axios from "axios";
import { FaRegUser, FaLock } from "react-icons/fa";
import AuthContext from "../../../context/authProvider";
import AuthUser from "../context/authUser";
import { UserProvider } from "../context/user";

axios.defaults.baseURL = "https://dummyjson.com";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [visible, setVisible] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrmsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "post",
        url: "/auth/login",
        data: {
          username: username,
          password: password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      const accessToken = res?.data?.token;
      setAuth({ username, password, accessToken });
      setUsername("");
      setPass("");
      setSuccess(true);
    } catch (err) {
      if (!err.res) {
        setErrmsg("No server respone");
        setVisible(true);
        console.log(username, password);
      } else if (err.res.status === 400) {
        setErrmsg("Username tidak terdaftar");
        setVisible(true);
      } else if (err.res.status === 401) {
        setErrmsg("Unauthorized");
        setVisible(true);
      } else {
        setErrmsg("Login Failed");
        setVisible(true);
      }
    }
  };

  return (
    <>
      {success && <Navigate to="dashboard" />}
      <div>
        <section className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={8}>
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm>
                        <h1>Login</h1>
                        <p className="text-medium-emphasis">
                          Sign In for admin
                        </p>
                        <CAlert
                          color="warning"
                          dismissible
                          visible={visible}
                          onClose={() => setVisible(false)}
                        >
                          {errmsg}
                        </CAlert>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <FaRegUser />
                          </CInputGroupText>
                          <CFormInput
                            ref={userRef}
                            placeholder="Username"
                            autoComplete="username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <FaLock />
                          </CInputGroupText>
                          <CFormInput
                            ref={userRef}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPass(e.target.value)}
                            required
                          />
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton
                              color="primary"
                              className="px-4"
                              onClick={handleSubmit}
                            >
                              Login
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard
                    className="text-white bg-primary py-5"
                    style={{
                      width: "44%",
                      backgroundImage: `url(${Ibackground1})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <CCardBody className="text-center">
                      <div>
                        <h2>Yourney</h2>
                        <p>Make Your Journey</p>
                        <Link to="/register">
                          {" "}
                          {/*ubah logo*/}
                          {/* <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton> */}
                        </Link>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </section>
      </div>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import img1 from "../images/da3de3cb-8273-42ce-a649-5c6903e33b96.jpeg";

function Register() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      password,
    };
    axios
      .post("http://52.72.242.247:8070/register", newUser)
      .then((Response) => {
        navigate("/first");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <div style={{ background: "#1a1a1a" }} className="h-screen">
        <MDBContainer
          className="my-0 h-screen"
          style={{ background: "#1a1a1a" }}
        >
          <MDBCard className="h-screen" style={{ background: "#ffffe0" }}>
            <MDBRow className="g-0 h-screen">
              <MDBCol md="4.05">
                <MDBCardImage
                  src={img1}
                  alt="login form"
                  className="rounded-start w-100 h-screen "
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column h-screen">
                  <div className="d-flex flex-row mt-2">
                    <span
                      className="h1 fw-bold mb-0"
                      style={{ fontFamily: "cursive" }}
                    >
                      Auto Guardian
                    </span>
                  </div>

                  <h5
                    className="fw-normal  pb-3"
                    style={{ letterSpacing: "1px", fontFamily: "cursive" }}
                  >
                    Your vehicle is safer than ever before
                  </h5>
                  <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
                    Create your account here{" "}
                  </p>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="User name"
                    id="name"
                    type="text"
                    size="lg"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                    size="lg"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <button
                    type="button"
                    class="btn btn-dark  btn-lg btn-block mb-4 px-5"
                    onClick={addUser}
                  >
                    Sign up
                  </button>

                  <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
                    Already have an account? Sign in here{" "}
                  </p>

                  <Link
                    to={"http://" + window.location.hostname + ":3000/login"}
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      type="button"
                      class="btn btn-dark  btn-lg btn-block mb-4 px-5"
                    >
                      Sign in
                    </button>
                  </Link>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Register;

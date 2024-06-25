import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

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
import img1 from "../images/An-Inspiring-Trip-through-France_-via-Pinterest.jpeg";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const logUser = (e) => {
    e.preventDefault();

    axios
      .post("http://52.72.242.247:8070/login", {
        name,
        password,
      })
      .then((Response) => {
        if (Response.data === "Success") {
          enqueueSnackbar("Successful entry!", {
            variant: "dark",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
          });
          navigate("/first");
        } else {
          enqueueSnackbar("Wrong entry", {
            variant: "warning",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <div className="h-screen">
        <MDBContainer className=" h-screen mt-5">
          <MDBCard className="h-screen mb-0" style={{ background: "#fafeb9" }}>
            <MDBRow className="g-0 h-screen">
              <MDBCol md="4" className="h-screen">
                <MDBCardImage
                  src={img1}
                  alt="login form"
                  className="rounded-start w-100 "
                />
              </MDBCol>

              <MDBCol className="h-screen" md="6">
                <MDBCardBody className="d-flex flex-column ">
                  <div className="d-flex flex-row mt-2">
                    <span
                      className="h1 fw-bold "
                      style={{ color: "#c69f26", fontFamily: "cursive" }}
                    >
                      Auto Guardian
                    </span>
                  </div>
                  <h4
                    className="fw-normal  pb-3  "
                    style={{
                      letterSpacing: "1px",
                      color: "#c69f26",
                      fontFamily: "cursive",
                    }}
                  >
                    Your vehicle is safer than ever before
                  </h4>
                  <h5
                    className="fw-normal pb-lg-2"
                    style={{ letterSpacing: "1px", color: "black" }}
                  >
                    Sign in here
                  </h5>

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
                    onClick={logUser}
                  >
                    Login
                  </button>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Login;

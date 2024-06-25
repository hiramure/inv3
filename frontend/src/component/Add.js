import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import imgBack from "../images/Screenshot-_1266_.jpeg";
import Header from "../component/Header";
import { useSnackbar } from "notistack";

function Add() {
  const [make, setMake] = useState("");
  const [mode, setMode] = useState("");
  const [yom, setYom] = useState("");
  const [yop, setYop] = useState("");
  const [sh, setSh] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const addCar = () => {
    const newVehicle = {
      make,
      mode,
      yom,
      yop,
      sh,
    };
    axios
      .post("http://52.72.242.247:8070/cars/", newVehicle)
      .then(() => {
        enqueueSnackbar("New car added!", {
          variant: "dark",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        });
        // alert("added");
      })
      .catch((error) => {
        enqueueSnackbar("Required fields exist!", {
          variant: "warning",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        });
      });
    navigate("/cars/show");
  };

  return (
    <div>
      <Header />

      <div
        classNameName=" background-size: cover"
        style={{
          backgroundImage: `url(${imgBack})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "90vh",
        }}
      >
        <form
          classNameName=" container container-fluid"
          style={{ position: "absolute", top: 90, left: 105 }}
        >
          <div className="form-group" style={{ color: "wheat" }}>
            <label for="make">Make</label>
            <input
              type="text"
              className="form-control"
              id="make"
              placeholder="Make"
              onChange={(e) => {
                setMake(e.target.value);
              }}
            />
          </div>

          <div classNameName="form-group" style={{ color: "wheat" }}>
            <label for="mode">Model</label>
            <input
              type="text"
              classNameName="form-control"
              id="mode"
              placeholder="Model"
              onChange={(e) => {
                setMode(e.target.value);
              }}
            />
          </div>
          <div classNameName="form-group" style={{ color: "wheat" }}>
            <label for="yom">Year of Manufacturing</label>
            <input
              type="text"
              classNameName="form-control"
              id="yom"
              placeholder="Manufactured Year"
              onChange={(e) => {
                setYom(e.target.value);
              }}
            />
          </div>
          <div classNameName="form-group" style={{ color: "wheat" }}>
            <label for="yop">Year of Purchase</label>
            <input
              type="text"
              classNameName="form-control"
              id="yop"
              placeholder="Purchased Year"
              onChange={(e) => {
                setYop(e.target.value);
              }}
            />
          </div>
          <div className="form-group" style={{ color: "wheat" }}>
            <label for="sh">Servise History</label>
            <input
              type="text"
              className="form-control"
              id="sh"
              placeholder="History"
              onChange={(e) => {
                setSh(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            classNameName="btn  btn-outline-warning"
            onClick={addCar}
          >
            Submit
          </button>
        </form>
      </div>
      <h8
        style={{
          position: "absolute",
          top: 30,
          right: 120,
          color: "#FBC740",
        }}
      >
        Your vehicle is safer than ever before
      </h8>
    </div>
  );
}

export default Add;

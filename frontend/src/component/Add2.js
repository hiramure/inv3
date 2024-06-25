import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import imgBack from "../images/Screenshot-_1273_.jpeg";
import Header from "../component/Header";

function Add2() {
  const [make, setMake] = useState("");
  const [mode, setMode] = useState("");
  const [yom, setYom] = useState("");
  const [yop, setYop] = useState("");
  const [sh, setSh] = useState("");
  const navigate = useNavigate();

  const addVan = () => {
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
        //alert("added");
      })
      .catch((error) => {
        alert(error);
      });
    navigate("/vans/show");
  };

  return (
    <div>
      <Header />
      <div
        className=" background-size: cover"
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
          className=" container container-fluid"
          style={{ position: "absolute", top: 90, left: 105 }}
        >
          <div class="form-group" style={{ color: "wheat" }}>
            <label for="make" style={{ color: "wheat" }}>
              Make
            </label>
            <input
              type="text"
              class="form-control"
              id="make"
              placeholder="Make"
              onChange={(e) => {
                setMake(e.target.value);
              }}
            />
          </div>

          <div class="form-group" style={{ color: "wheat" }}>
            <label for="mode" style={{ color: "wheat" }}>
              Model
            </label>
            <input
              type="text"
              class="form-control"
              id="mode"
              placeholder="Model"
              onChange={(e) => {
                setMode(e.target.value);
              }}
            />
          </div>

          <div class="form-group" style={{ color: "wheat" }}>
            <label for="yom">Year of Manufacturing</label>
            <input
              type="text"
              class="form-control"
              id="yom"
              placeholder="Manufactured Year"
              onChange={(e) => {
                setYom(e.target.value);
              }}
            />
          </div>
          <div class="form-group" style={{ color: "wheat" }}>
            <label for="yop">Year of Purchase</label>
            <input
              type="text"
              class="form-control"
              id="yop"
              placeholder="Purchased Year"
              onChange={(e) => {
                setYop(e.target.value);
              }}
            />
          </div>
          <div class="form-group" style={{ color: "wheat" }}>
            <label for="sh">Servise History</label>
            <input
              type="text"
              class="form-control"
              id="sh"
              placeholder="History"
              onChange={(e) => {
                setSh(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn  btn-outline-warning"
            onClick={addVan}
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

export default Add2;

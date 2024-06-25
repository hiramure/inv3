import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import imgBack from "../images/Screenshot-_1268_.jpeg";
import Header from "../component/Header";

function Update2() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [make, setMake] = useState("");
  const [mode, setMode] = useState("");
  const [yom, setYom] = useState("");
  const [yop, setYop] = useState("");
  const [sh, setSh] = useState("");

  useEffect(() => {
    axios
      .get(`http://52.72.242.247:8070/vans/${id}`)
      .then((Response) => {
        setMake(Response.data.make);
        setMode(Response.data.mode);
        setYom(Response.data.yom);
        setYop(Response.data.yop);
        setSh(Response.data.sh);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const addVan = () => {
    const newVehicle = {
      make,
      mode,
      yom,
      yop,
      sh,
    };
    axios
      .put(`http://52.72.242.247:8070/vans/${id}`, newVehicle)
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
          <div class="form-group">
            <label for="make" style={{ color: "wheat" }}>
              Make
            </label>
            <input
              type="text"
              class="form-control"
              id="make"
              placeholder="make"
              onChange={(e) => {
                setMake(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="mode" style={{ color: "wheat" }}>
              Mode
            </label>
            <input
              type="text"
              class="form-control"
              id="mode"
              placeholder="mode"
              onChange={(e) => {
                setMode(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="yom" style={{ color: "wheat" }}>
              Year of Manufacture
            </label>
            <input
              type="text"
              class="form-control"
              id="yom"
              placeholder="Manufactured year"
              onChange={(e) => {
                setMode(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="yop" style={{ color: "wheat" }}>
              Year of Purchased
            </label>
            <input
              type="text"
              class="form-control"
              id="yop"
              placeholder="Purchased year"
              onChange={(e) => {
                setMode(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="sh" style={{ color: "wheat" }}>
              Service History
            </label>
            <input
              type="text"
              class="form-control"
              id="sh"
              placeholder="Service History"
              onChange={(e) => {
                setMode(e.target.value);
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

export default Update2;

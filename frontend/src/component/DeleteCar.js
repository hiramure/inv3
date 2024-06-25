import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import imgBack from "../images/Screenshot-_1272_.jpeg";
import Header from "../component/Header";
import { Link } from "react-router-dom";

function DeleteCar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteCar = () => {
    axios
      .delete(`http://52.72.242.247:8070/cars/${id}`)
      .then(() => {
        navigate("/cars/show");
      })
      .catch((error) => {
        alert(error);
      });
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
          width: "99vw",
          height: "90vh",
        }}
      >
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h4
            className="text-2xl"
            style={{ color: "wheat", position: "absolute", top: 80, left: 40 }}
          >
            Are you sure you want to remove this vehicle?
          </h4>

          <form className="form-inline">
            <Link to={"/cars/show"}>
              <button
                type="button"
                className="btn  btn-outline-warning"
                style={{ position: "absolute", top: 120, left: 100 }}
              >
                No
              </button>
            </Link>
            <button
              type="button"
              className="btn  btn-outline-warning"
              onClick={deleteCar}
              style={{ position: "absolute", top: 120, left: 40 }}
            >
              Yes
            </button>
          </form>
        </div>
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

export default DeleteCar;

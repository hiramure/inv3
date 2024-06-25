import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import imgBack from "../images/Screenshot-_1266_.jpeg";
import Header from "../component/Header";
import { Link } from "react-router-dom";

function DetailCar() {
  const [car, setCar] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://52.72.242.247:8070/cars/${id}`)
      .then((Response) => {
        setCar(Response.data);
        console.log(Response.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
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
        <div
          className="container mr-2 align-middle"
          style={{
            margin: "auto",
            left: "20%",
            position: "absolute",
            top: "30%",
          }}
        >
          <p style={{ color: "wheat", fontSize: 22 }}>Make: {car.make}</p>
          <p style={{ color: "wheat", fontSize: 22 }}>Mode: {car.mode}</p>
          <p style={{ color: "wheat", fontSize: 22 }}>
            Year of Manufatured: {car.yom}
          </p>
          <p style={{ color: "wheat", fontSize: 22 }}>
            Year of Purchased: {car.yop}
          </p>
          <p style={{ color: "wheat", fontSize: 22 }}>
            Service History: {car.sh}
          </p>
        </div>
        <Link to={"/cars/show"}>
          <button
            type="button"
            className="btn  btn-outline-warning "
            style={{ position: "absolute", top: 480, right: 970 }}
          >
            Go Back..
          </button>
        </Link>

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
    </div>
  );
}

export default DetailCar;

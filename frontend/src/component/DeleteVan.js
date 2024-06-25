import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import imgBack from "../images/Screenshot-_1269_.jpeg";
import Header from "../component/Header";
function DeleteVan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteVan = () => {
    axios
      .delete(`http://52.72.242.247:8070/vans/${id}`)
      .then(() => {
        navigate("/vans/show");
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
            style={{ color: "wheat", position: "absolute", top: 80, left: 20 }}
          >
            Are You Sure You want to delete this van?
          </h4>

          <button
            type="button"
            className="btn  btn-outline-warning"
            onClick={deleteVan}
            style={{ position: "absolute", top: 120, left: 20 }}
          >
            Yes
          </button>
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

export default DeleteVan;

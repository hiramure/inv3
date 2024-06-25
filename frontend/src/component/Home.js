import React, { Component } from "react";
import img1 from "../images/da3de3cb-8273-42ce-a649-5c6903e33b96.jpeg";
import img2 from "../images/Guide to Hosting a Tropical Summer Party.jpeg";
import img3 from "../images/TRAVEL — Leggybird Photography.jpeg";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <div>
        <div className="container mt-4 mr-6  ">
          <div className="row">
            <div className="col-4">
              <div
                className="card"
                style={{
                  width: "300px",
                  borderradius: "3%",
                }}
              >
                <img className="card-img-top" src={img1} alt="Card image cap" />
                <Link to={"/cars/show"} style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    class="btn btn-warning btn-lg btn-block"
                  >
                    Car
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="card " style={{ width: "300px" }}>
                <img className="card-img-top" src={img3} alt="Card image cap" />
                <Link to={"/vans/show"} style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    class="btn btn-warning btn-lg btn-block"
                  >
                    Van
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-4">
              {" "}
              <div className="card " style={{ width: "300px" }}>
                <img className="card-img-top" src={img2} alt="Card image cap" />

                <Link to={"/others/show"} style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    class="btn btn-warning btn-lg btn-block"
                  >
                    Lorry
                  </button>
                </Link>
              </div>
            </div>
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
      <Footer />
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import axios, { spread } from "axios";
import { Link } from "react-router-dom";
import imgBack from "../images/Screenshot-_1278_.jpeg";
import Header from "../component/Header";

function ShowAll() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://52.72.242.247:8070/cars/")
      .then((Response) => {
        setCars(Response.data);
        setLoading(false);
        console.log(Response.data);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      <div>
        {loading ? (
          <h1 my-4>Loading..</h1>
        ) : (
          <div
            className=" background-size: cover"
            style={{
              backgroundImage: `url(${imgBack})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
            }}
          >
            <div>
              <table className="table table-borderless container-fluid">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col" style={{ color: "wheat" }}>
                      CAR MODELS
                    </th>
                  </tr>
                </thead>

                {cars.map((car) => (
                  <tbody>
                    <tr key={car._id}>
                      <td></td>
                      <td style={{ color: "wheat" }}>{car.make}</td>

                      <td>
                        <div>
                          <Link to={`/cars/delete/${car._id}`}>
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-sm mr-1"
                            >
                              Delete
                            </button>
                          </Link>
                          <Link to={`/cars/update/${car._id}`}>
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-sm mr-1"
                            >
                              Update
                            </button>
                          </Link>
                          <Link to={`/cars/detail/${car._id}`}>
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-sm "
                            >
                              Details
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <Link to={"/cars/add"}>
                <button
                  type="button"
                  className="btn  btn-outline-warning "
                  style={{ position: "absolute", top: 60, right: 15 }}
                >
                  Add Car
                </button>
              </Link>
            </div>
          </div>
        )}
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
    /*
    <div style={{ backgroundImage: `url(${imgBackground})` }}>
      <h3>All vehicle</h3>
     <table className="table table-borderless container-fluid">
        <thead>
          <tr>
            <th scope="col">First</th>
          </tr>
        </thead>
        {cars.map((car) => (
          <tbody>
            <tr key={car._id}>
              <td>{car.make}</td>

              <td>
                <div>
                  <Link to={`/cars/delete/${car._id}`}>
                    <button type="button" className="btn btn-warning">
                      delete
                    </button>
                  </Link>
                  <Link to={`/cars/update/${car._id}`}>
                    <button type="button" className="btn btn-warning">
                      Update
                    </button>
                  </Link>
                  <Link to={`/cars/detail/${car._id}`}>
                    <button type="button" className="btn btn-warning">
                      Details
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Link to={"/cars/add"}>
        <button type="button" className="btn btn-warning">
          Add Car
        </button>
      </Link>
    </div>*/
  );
}

export default ShowAll;

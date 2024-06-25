import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imgBack from "../images/Screenshot-_1264_.jpeg";
import Header from "../component/Header";

function ShowAll2() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://52.72.242.247:8070/vans/")
      .then((Response) => {
        setVans(Response.data);
        setLoading(false);
        console.log(Response.data);
      })
      .catch((err) => {
        alert(err.message);
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
            <table class="table table-borderless container-fluid">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col" style={{ color: "wheat" }}>
                    Van Models
                  </th>
                </tr>
              </thead>
              {vans.map((van) => (
                <tbody>
                  <tr key={van._id}>
                    <td></td>

                    <td style={{ color: "wheat" }}>{van.make}</td>
                    <td>
                      <div>
                        <Link to={`/vans/delete/${van._id}`}>
                          <button
                            type="button"
                            class="btn btn-outline-warning btn-sm mr-1"
                          >
                            Delete
                          </button>
                        </Link>
                        <Link to={`/vans/update/${van._id}`}>
                          <button
                            type="button"
                            class="btn btn-outline-warning btn-sm mr-1"
                          >
                            Update
                          </button>
                        </Link>
                        <Link to={`/vans/detail/${van._id}`}>
                          <button
                            type="button"
                            class="btn btn-outline-warning btn-sm "
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
            <Link to={"/vans/add"}>
              <button
                type="button"
                class="btn btn-outline-warning "
                style={{ position: "absolute", top: 60, right: 15 }}
              >
                Add Van
              </button>
            </Link>
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
  );
}

export default ShowAll2;

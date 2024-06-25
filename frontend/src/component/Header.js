import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/Bus Icon Common Mass Transit Pictogram Stock Vector (Royalty Free) 519685579 _ Shutterstock.jfif";
import { MdHomeFilled } from "react-icons/md";
import { MdSearch } from "react-icons/md";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand ml-4" style={{ color: "#FBC740" }}>
          <img
            src={img1}
            width="35"
            height="35"
            class="d-inline-block align-top mr-2"
            alt=""
          />
          Auto Guardian
        </a>

        <form className="form-inline">
          <button
            className="btn btn-outline-warning mt-2 mb-2 ml-2 mr-2 my-sm-0"
            type="submit"
            style={{ color: "yellow", outline: "#FBC740" }}
          >
            <MdSearch width="20" height="20" />
          </button>

          <Link to={"/"}>
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
              style={{ color: "yellow", outline: "#FBC740" }}
            >
              <MdHomeFilled width="20" height="20" />
            </button>
          </Link>
        </form>
      </nav>
    </div>
  );
}

export default Header;

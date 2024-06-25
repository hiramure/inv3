import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import Add from "./component/Add";
import Add2 from "./component/Add2";
import ShowAll from "./component/ShowAll";
import ShowAll2 from "./component/ShowAll2";
import Update from "./component/Update";
import Update2 from "./component/Update2";
import DeleteCar from "./component/DeleteCar";
import DeleteVan from "./component/DeleteVan";
import DetailCar from "./component/DetailCar";
import DetailVan from "./component/DetailVan";
import Register from "./component/Register";
import Login from "./component/Login";
import FirstPage from "./component/FirstPage";
import Search from "./component/Search";
import ShowAll3 from "./component/ShowAll3";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cars/detail/:id" element={<DetailCar />} />
          <Route path="/vans/detail/:id" element={<DetailVan />} />
          <Route path="/cars/delete/:id" element={<DeleteCar />} />
          <Route path="/vans/delete/:id" element={<DeleteVan />} />
          <Route path="/cars/update/:id" element={<Update />} />
          <Route path="/vans/update/:id" element={<Update2 />} />
          <Route path="/cars/show" element={<ShowAll />} />
          <Route path="/vans/show" element={<ShowAll2 />} />
          <Route path="/others/show" element={<ShowAll3 />} />
          <Route path="/cars/add" element={<Add />} />
          <Route path="/vans/add" element={<Add2 />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, MONGODBURL } from "./config.js";
import { Car } from "./models/Car.js";
import { Van } from "./models/Van.js";
import { User } from "./models/User.js";

import carRoutes from "./routes/carRoutes.js";
import vanRoutes from "./routes/vanRoutes.js";
import otherRoutes from "./routes/otherRoutes.js";

import cors from "cors";

//app.use(cors());

const app = express();
app.use(
  cors({
    Origin: "*",

    Methods: ["POST, PUT, PATCH, GET, DELETE, OPTIONS"],

    Headers: "*",
  })
);

app.use(express.json());

app.use("/cars", carRoutes);
app.use("/vans", vanRoutes);
app.use("/other", otherRoutes);

/*app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
*/
app.listen(PORT, () => {
  console.log("App listen in Port 8070");
});

app.post("/register", async (request, response) => {
  try {
    if (!request.body.name || !request.body.password) {
      return response.status(400).send({
        message: "Send all required fields: make, model",
      });
    }
    const newUser = {
      name: request.body.name,
      password: request.body.password,
    };
    const user = await User.create(newUser);
    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.post("/login", async (request, response) => {
  const { name, password } = request.body;
  User.findOne({ name: name }).then((users) => {
    if (users) {
      if (users.password === password) {
        response.json("Success");
      } else {
        response.json("No record");
      }
    }
  });
});

mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("Not connected");
  });

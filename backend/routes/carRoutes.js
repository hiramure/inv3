import express, { request, response } from "express";
import { Car } from "../models/Car.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (!request.body.make || !request.body.mode) {
      return response.status(400).send({
        message: "Send all required fields: make, model",
      });
    }
    const newCar = {
      make: request.body.make,
      mode: request.body.mode,
      yom: request.body.yom,
      yop: request.body.yop,
      sh: request.body.sh,
    };
    const car = await Car.create(newCar);
    return response.status(201).send(car);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const car = await Car.findById(id);
    return response.status(200).json(car);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (!request.body.make || !request.body.mode) {
      return response.status(400).send({
        message: "Send all required field :brand, mode",
      });
    }
    const { id } = request.params;

    const result = await Car.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(400).json({ message: "Car not found" });
    }
    return response.status(200).send({ message: "Car updated sucessfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Car.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Car not found" });
    }
    return response.status(200).send({ message: "Car deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const cars = await Car.find({});

    return response.status(200).json(cars);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

/*router.route("/").get((request, response) => {
  Car.find()
    .then((cars) => {
      response.json(cars);
    })
    .catch((error) => {
      console.log(error);
    });
});
*/
export default router;

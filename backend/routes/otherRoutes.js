import express, { request, response } from "express";
import { Other } from "../models/Other.js";
const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (!request.body.make || !request.body.mode) {
      return response.status(400).send({
        message: "Send all required fields: make, model",
      });
    }
    const newOther = {
      make: request.body.make,
      mode: request.body.mode,
      yom: request.body.yom,
      yop: request.body.yop,
      sh: request.body.sh,
    };
    const other = await Other.create(newOther);
    return response.status(201).send(other);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const other = await Other.findById(id);
    return response.status(200).json(other);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (!request.body.make || !request.body.mode) {
      return response.status(400).send({
        message: "Send all required field :brand, model",
      });
    }
    const { id } = request.params;

    const result = await Other.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(400).json({ message: "Vehicle not found" });
    }
    return response
      .status(200)
      .send({ message: "Vehicle updated sucessfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Other.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Vehicle not found" });
    }
    return response
      .status(200)
      .send({ message: "Vehicle deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const other = await Other.find({});

    return response.status(200).json(other);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

import express from "express";
import { Van } from "../models/Van.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (!request.body.make || !request.body.mode) {
      return response.status(400).send({
        message: "Send all required fields: make, model",
      });
    }
    const newVan = {
      make: request.body.make,
      mode: request.body.mode,
      yom: request.body.yom,
      yop: request.body.yop,
      sh: request.body.sh,
    };
    const van = await Van.create(newVan);
    return response.status(201).send(van);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const van = await Van.findById(id);
    return response.status(200).json(van);
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

    const result = await Van.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(400).json({ message: "Van not found" });
    }
    return response.status(200).send({ message: "Van updated sucessfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Van.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Van not found" });
    }
    return response.status(200).send({ message: "Van deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const vans = await Van.find({});

    return response.status(200).json(vans);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

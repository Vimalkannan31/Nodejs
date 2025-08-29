import express from "express";
import {
  movieCreate,
  movieDelete,
  movieEdit,
  movieIndex,
} from "../controllers/movies.controllers.js";

const route = express.Router();

// CRUD Opersations

//Read
route.get("/", movieIndex);

//Create
route.post("/", movieCreate);

//update
route.put("/:id", movieEdit);

//delete
route.delete("/:id", movieDelete);

export default route;

import express from "express";
import {
  movieCreate,
  movieDelete,
  MovieDetails,
  movieEdit,
  movieIndex,
} from "../controllers/movies.controllers.js";

const route = express.Router();

// CRUD Opersations

//Read
route.get("/", movieIndex);

//singleGet
route.get("/:id", MovieDetails);

//Create
route.post("/", movieCreate);

//update
route.put("/:id", movieEdit);

//delete
route.delete("/:id", movieDelete);

export default route;

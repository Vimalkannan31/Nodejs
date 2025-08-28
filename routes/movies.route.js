import express from "express";

const route = express.Router();

// CRUD Opersations

//Read
route.get("/", (req, res) => {
  //Read
  res.send("read All movies");
});

//Create
route.post("/", (req, res) => {
  //Create
  res.send("Create all movies");
});

//update
route.put("/:id", (req, res) => {
  //update
  res.send("update movies");
});

//delete
route.delete("/:id", (req, res) => {
  //delete
  res.send("delete movie");
});

export default route;

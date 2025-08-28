import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello everyone" });
});

app.listen(PORT, () => {
  console.log(`The server is Running at http://localhost:${PORT}`);
});

import express from "express";
import movieRoutes from "./routes/movies.route.js";
import ConnectDB from "./lib/db.js";

const app = express();
const PORT = 5000;

//Connect db
ConnectDB();

//config
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello everyone" });
});

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is Running at http://localhost:${PORT}`);
});

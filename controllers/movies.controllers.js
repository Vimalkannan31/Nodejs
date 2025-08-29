import Movie from "../models/movie.model.js";

export const movieIndex = async (req, res) => {
  //Read

  try {
    const movie = await Movie.find();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieCreate = async (req, res) => {
  //Create
  //res.send("Create all movies");

  const newMovie = new Movie({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const MovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: "Cannot Fine Movie" });
    } else {
      return res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const movieEdit = async (req, res) => {
  //update
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, description: req.body.description },
      { new: true }
    );

    res.status(200).json(updateMovie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const movieDelete = async (req, res) => {
  //delete
  const MovieId = req.params.id;
  try {
    await Movie.deleteOne({ _id: MovieId });
    res.json({ message: "Movie deleted.." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

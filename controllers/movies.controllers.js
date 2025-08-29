export const movieIndex = (req, res) => {
  //Read
  res.send("read All movies");
};

export const movieCreate = (req, res) => {
  //Create
  res.send("Create all movies");
};

export const movieEdit = (req, res) => {
  //update
  res.send("update movies");
};

export const movieDelete = (req, res) => {
  //delete
  res.send("delete movie");
};

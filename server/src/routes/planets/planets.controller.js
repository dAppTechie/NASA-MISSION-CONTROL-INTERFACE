const planets = [];

const getAllPlanets = (req, res) => {
  return res.status(200).json(planets);
};

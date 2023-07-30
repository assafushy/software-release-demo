module.exports = (app) => {
  app.get("/tzahi", (req, res) => {
    res.send("This is tzahi example route!");
  });
};

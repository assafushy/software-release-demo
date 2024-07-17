module.exports = (app) => {
  app.get("/evgeni", (req, res) => {
    res.send("This is Evgeni's route!");
  });
};

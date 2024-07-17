module.exports = (app) => {
  app.get("/rea", (req, res) => {
    res.send("This is rea's route!");
  });
};
 
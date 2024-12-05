module.exports = (app) => {
  app.get("/yuda", (req, res) => {
    res.send("This is an DAAAMN!");
  });
};

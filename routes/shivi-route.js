module.exports = (app) => {
  app.get("/shivi", (req, res) => {
    res.send("shivi route is the best!!!");
  });
};

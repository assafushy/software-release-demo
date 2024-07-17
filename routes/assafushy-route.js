module.exports = (app) => {
  app.get("/assafushy", (req, res) => {
    res.send("This is an assafushy route!");
  });
};

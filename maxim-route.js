module.exports = (app) => {
  app.get("/maxim", (req, res) => {
    res.send("This is an maxim route!");
  });
};


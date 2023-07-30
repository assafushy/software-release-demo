module.exports = (app) => {
  app.get("/aviad", (req, res) => {
    res.send("This is Aviad ");
  });
};



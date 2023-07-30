module.exports = (app) => {
  app.get("/example", (req, res) => {
    res.send("Hi,this is an example route!");
  });
};

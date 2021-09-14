const express = require('express');
const app = express();

app.use(express.static("public"));
//definimos rutas 
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
  });

  app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
  });
  app.get("/works", (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`);
  });
  app.get("/photoGallery", (req, res) => {
    res.sendFile(`${__dirname}/views/photoGallery.html`);
  });


  app.get("/stylesheets", (req, res) => {
    res.sendFile(`${__dirname}/public/stylesheets`);
  });
app.listen(3000, () => { // dice a node que esta escuchando lo que pase en localhost3000
    console.log("http://localhost:3000");
  });
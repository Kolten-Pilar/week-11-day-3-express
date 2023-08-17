const express = require("express");
const app = express();
const port = 3000;

// routes
app.get('/', (req, res) => {
  res.send(`<h1>This is how we do the homepage</h1>
  <h2>Do you wanna do what we do? Click about us!</h2>
  <a href='http://localhost:3000/about'>About Us</a>
  `)
})

app.get('/about', (req, res) =>{
  res.send(`<h1>This is our about page</h1>
  <h2>We are a multi-national conglomorate</h2>
  <h3>We like money</h3>
  <a href='http://localhost:3000/contact'>Get in Touch</a>
  `)
})

app.get('/contact/', (req, res) => {
  res.send(`<h1>Our People</h1>
  <h2><a href='http://localhost:3000/contact/judy'>Judy</a></h2>
  <h2><a href='http://localhost:3000/contact/tom'>Tom</a></h2>
  <h2><a href='http://localhost:3000/contact/alice'>Alice</a></h2>
  <h2><a href='http://localhost:3000/contact/michael'>Michael</a></h2>
  <h2><a href='http://localhost:3000/contact/barry'>Barry</a></h2>
  <h2>This list is ever changing. We could have people here not listed. Try typing in a name at the end of the URL!</h2>
  `);
})

app.get('/contact/:people', (req, res) => {
  res.send(`<h1>${req.params.people}</h1>`);
})

app.get('/thanks', (req, res) => {
  res.send(`<h1>Thank You for Viewing</h1>`)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

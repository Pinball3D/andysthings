const express = require('express');
const app = express();
const port = 5000;

//main site
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/html/index.html");
  console.log(req.query.debug);
});
app.get('/main.css', (req, res) => {
  res.sendFile(process.cwd() + "/css/main.css");
});
app.get('/index.js', (req, res) => {
  res.sendFile(process.cwd() + "/js/index.js");
});

//projects page
app.get('/projects', (req, res) => {
  res.sendFile(process.cwd() + "/html/projects.html");
});
app.get('/projects/index.js', (req, res) => {
  res.sendFile(process.cwd() + "/js/projects.js");
});
app.get('/projects/main.css', (req, res) => {
  res.sendFile(process.cwd() + "/css/projects.css");
});

//about page
app.get('/about', (req, res) => {
  res.sendFile(process.cwd() + "/html/about.html");
});
app.get('/about/index.js', (req, res) => {
  res.sendFile(process.cwd() + "/js/about.js");
});
app.get('/about/main.css', (req, res) => {
  res.sendFile(process.cwd() + "/css/about.css");
});

//other
app.get('/lol', (req, res)=> {
res.writeHead(301, {
      location: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    });
res.end()
});
app.get('*', (req, res) => {
  res.sendFile(process.cwd() + "/html/404.html");
});
app.listen(port, () => {
  console.log(`running on port 80`);
});

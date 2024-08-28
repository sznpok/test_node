const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const express = require("express");
const server = express();

server.get("/", (req, res) => {
  //res.send("<h1>Sijan Pokharel </h1>");
  //res.sendFile("/Users/sijanpokharel/Documents/testnode/index.html");
  //res.json(data);
  // res.sendStatus(404);
  //  res.status(200).send(data);
});

//this one at the end always
server.listen(8080, () => {
  console.log("Server started ");
});

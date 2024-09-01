const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const express = require("express");
const morgan = require("morgan");
const server = express();

//body parser
server.use(express.json());

//for logger using morgan
server.use(morgan("default "));
//send data using formdata
//server.use(express.urlencoded());

//send static file send through folder
server.use(express.static("public"));

// server.use((req, res, next) => {
//   console.log(
//     req.get("User-Agent"),
//     req.method,
//     req.ip,
//     new Date(),
//     req.hostname,
//   ); //logger
//   next();
// });

const auth = (req, res, next) => {
  console.log(req.query);
  // if (req.query.password == 123) {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next();
};

//API - Endpoint - Route
server.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});

server.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  // res.json({ type: "POST" });
  res.status(201).json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH " });
});

server.get("/prod", (req, res) => {
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

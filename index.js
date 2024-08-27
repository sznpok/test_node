const http = require("http");
const fs = require("fs");
const file = fs.readFileSync("index.html", "utf-8");
const data = { age: 5 };
const server = http.createServer((req, res) => {
  console.log("Server started ");
  res.setHeader("Dummy", "Dummy Value");
  //  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Type", "text/html");
  //res.end(JSON.stringify(data));
  res.end(file);
});
server.listen(8080);

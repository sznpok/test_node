const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const prod = data.products;

console.log(prod);
//const data = { age: 5 };
const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      if (req.url.startsWith("/product")) {
        const id = req.url.split("/")[2];
        const prod = products.find((p) => p.id === +id);

        console.log(prod);
      }
      res.end(data);
      break;
    default:
      res.writeHead(404, "Not Found");
      res.end();
  }
  console.log("Server started ");
});
server.listen(8080);

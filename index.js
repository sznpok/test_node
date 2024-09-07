import express from "express";
const server = express();
import { connection } from "./postgres/postgres.js";

server.listen(8080, () => {
  console.log("server is running");
});

connection();

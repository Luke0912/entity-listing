const connect = require("./configs/db");

const router = require("./index")

const express = require("express");

const app = express();

app.use(express.json());

app.use(router);


app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening to port 5000");
  } catch (error) {
    console.log(error);
    console.log("hello");
  }
});

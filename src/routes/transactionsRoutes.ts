import express from "express";
// import controller

const routers = express.Router();

routers.get("/", (req, res) => {
  console.log(`aa`)
  res.send("This is the transaction request")
})

export = routers

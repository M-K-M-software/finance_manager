import express from "express";
// import controller

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("This is the login request")
})

export = router

const express = require("express");

const router = express.Router();

const userSchema = require("../models/user");

// create user

router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post("/users", (req, res) => {
  console.log(req.body);
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { nombre, email, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

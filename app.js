const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Argonaute = require("./models/Argonaute");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://sandra:{PASSWORD}@cluster0.qpipuqb.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/argonaute", (req, res, next) => {
  const argonaute = new Argonaute({
    ...req.body,
  });
  console.log(req.body);
  argonaute
    .save()
    .then(() => res.status(201).json({ message: "Argonaute enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});

app.get("/api/argonaute", (req, res, next) => {
  Argonaute.find()
    .then((argonautes) => res.status(200).json(argonautes))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = app;

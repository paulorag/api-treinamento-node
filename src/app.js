const express = require("express");
const app = express();
const usuarios = [
    { id: 1, nome: "Paulo Roberto" },
    { id: 2, nome: "Ana Carolina" },
    { id: 3, nome: "Bruno Costa" },
];

app.get("/", (req, res) => {
    res.json({ message: "API de Treinmaneto está no ar!" });
});

app.get("/status", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.get("/users", (req, res) => {
    res.status(200).json(usuarios);
});

module.exports = app;

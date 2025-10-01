const express = require("express");
const app = express();
app.use(express.json());
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

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find((u) => u.id === id);

    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.sendStatus(404);
    }
});

app.post("/users", (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: "O nome é obrigatório" });
    }

    const novoId =
        usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;

    const novoUsuario = {
        id: novoId,
        nome: nome,
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

module.exports = app;

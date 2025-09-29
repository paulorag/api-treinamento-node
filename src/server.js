const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({ message: "API de Treinamento está no ar!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

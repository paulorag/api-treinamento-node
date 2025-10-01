let usuarios = [
    { id: 1, nome: "Paulo Roberto" },
    { id: 2, nome: "Ana Carolina" },
    { id: 3, nome: "Bruno Costa" },
];

const getAllUsers = (req, res) => {
    res.status(200).json(usuarios);
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find((u) => u.id === id);

    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.sendStatus(404);
    }
};

const createUser = (req, res) => {
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
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex((u) => u.id === id);

    if (usuarioIndex === -1) {
        return res.sendStatus(404);
    }

    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ error: "O nome é obrigatório" });
    }

    usuarios[usuarioIndex].nome = nome;

    res.status(200).json(usuarios[usuarioIndex]);
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex((u) => u.id === id);

    if (usuarioIndex === -1) {
        return res.sendStatus(404);
    }

    usuarios.splice(usuarioIndex, 1);

    res.sendStatus(204);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};

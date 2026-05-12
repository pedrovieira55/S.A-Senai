const gerarTreino = require('../utils/workoutGenerator');

let users = []; // Banco de dados temporário (em memória)

const userController = {
    // Listar todos os usuários
    getAll: (req, res) => {
        res.status(200).json(users);
    },

    // Criar um usuário e gerar o treino baseado no Quiz
    create: (req, res) => {
        const { nome, email, objetivo, nivel } = req.body;

        // Chama a ferramenta que gera o treino
        const cronograma = gerarTreino(objetivo, nivel);

        const novoUsuario = {
            id: users.length + 1,
            nome,
            email,
            objetivo,
            nivel,
            cronograma
        };

        users.push(novoUsuario);
        res.status(201).json(novoUsuario);
    }
};

module.exports = userController;
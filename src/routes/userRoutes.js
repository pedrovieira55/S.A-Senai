const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para listar todos (GET)
router.get('/', userController.getAll);

// Rota para criar novo usuário com o Quiz (POST)
router.post('/', userController.create);

module.exports = router;
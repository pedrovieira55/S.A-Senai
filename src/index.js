const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware para a API entender JSON
app.use(express.json());
app.use(express.static('public'));

// Rota base para testar se o site está online
app.get('/', (req, res) => {
    res.send('API FitAcessível Online e Rodando!');
});

// Conectando as rotas de usuário
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
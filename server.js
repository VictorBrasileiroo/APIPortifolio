// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const projects = require('./projects.json');

app.get('/', (req, res) => {
    res.send('API Backend rodando! Use /api/projects para acessar os projetos.');
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

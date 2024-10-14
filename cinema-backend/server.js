const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/cinema', { useNewUrlParser: true, useUnifiedTopology: true });

// Modelo de filme
const FilmeSchema = new mongoose.Schema({
    titulo: String,
    classificacao: String,
    genero: String,
    duracao: String
});

const Filme = mongoose.model('Filme', FilmeSchema);

// Rotas para gerenciar os filmes
app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find();
    res.json(filmes);
});

app.post('/filmes', async (req, res) => {
    const filme = new Filme(req.body);
    await filme.save();
    res.json(filme);
});

app.put('/filmes/:id', async (req, res) => {
    const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(filme);
});

app.delete('/filmes/:id', async (req, res) => {
    await Filme.findByIdAndDelete(req.params.id);
    res.json({ message: 'Filme removido' });
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});

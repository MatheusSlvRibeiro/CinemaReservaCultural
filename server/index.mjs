import express from 'express';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors({
    origin: [  'http://localhost:3000', 'https://cinemareservacultural.netlify.app/' ]
}));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filmesSaoPauloPath = path.join(__dirname, "..", "src", "data", "saoPaulo", "filmesSaoPaulo.json");
const filmesNiteroiPath = path.join(__dirname, "..", "src", "data", "Niteroi", "filmesNiteroi.json");

const readJSONFile = (path) => {
    try {
        console.log("Tentando ler o arquivo", path);
        const data = fs.readFileSync(path, "utf-8");
        console.log("Arquivo lido com sucesso:", path);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${path}`, error);
        throw error;
    } 
};

const writeJSONFile = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf-8");
};

app.get('/filmes/:cidade/:id', (req, res) => {
    const { cidade, id } = req.params;
    const path = cidade === 'saoPaulo' ? filmesSaoPauloPath : filmesNiteroiPath;

    try {
        const filmes = readJSONFile(path);
        const filme = filmes.find((f) => f.id === id);

        if (!filme) {
            return res.status(404).json({ error: "Filme não encontrado." });
        }

        res.status(200).json(filme); 
    } catch (error) {
        res.status(500).json({ error: "Erro ao carregar o filme." });
    }
});

app.get('/filmes/:cidade', (req, res) => {
    const { cidade } = req.params;
    const path = cidade === 'saoPaulo' ? filmesSaoPauloPath : filmesNiteroiPath;

    try {
        const filmes = readJSONFile(path);
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao carregar os filmes" });
    }
});

app.post("/filmes/:cidade", (req, res) => {
    const { cidade } = req.params;
    const path = cidade === 'saoPaulo' ? filmesSaoPauloPath : filmesNiteroiPath;

    try {
        const filmes = readJSONFile(path);
        const novoFilme = req.body;

        novoFilme.id = nanoid(8); 

        filmes.push(novoFilme);
        writeJSONFile(path, filmes);
        res.status(201).json(novoFilme);
    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar o filme", details: error.message });
    }
});

app.put("/filmes/:cidade/:id", (req, res) => {
    const { cidade, id } = req.params;
    const path = cidade === 'saoPaulo' ? filmesSaoPauloPath : filmesNiteroiPath;

    try {
        const filmes = readJSONFile(path);
        const index = filmes.findIndex((filme) => filme.id === id); 

        if (index !== -1) {
            filmes[index] = { ...filmes[index], ...req.body };
            writeJSONFile(path, filmes);
            res.status(200).json(filmes[index]);
        } else {
            res.status(404).json({ error: "Filme não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar o filme.", details: error.message });
    }
});

app.delete("/filmes/:cidade/:id", (req, res) => {
    const { cidade, id } = req.params;
    const path = cidade === "saoPaulo" ? filmesSaoPauloPath : filmesNiteroiPath;

    try {
        let filmes = readJSONFile(path);
        filmes = filmes.filter((filme) => filme.id !== id);  

        writeJSONFile(path, filmes);
        res.status(200).json({ message: "Filme deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar o filme.", details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor funcionando em: ${port || process.env.BASE_URL}`);
});

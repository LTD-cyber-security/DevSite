const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Servir arquivos estáticos a partir do diretório 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});

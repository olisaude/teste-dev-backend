const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

module.exports = app;
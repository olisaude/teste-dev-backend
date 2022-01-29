const express = require('express');
const clientRouter = require('./routes/client.route');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', clientRouter);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

module.exports = app;
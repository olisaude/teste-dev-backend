const express = require('express');
const clientRouter = require('../routes/client.route');
const errorMiddleware = require('../middlewares/errorMidlleware');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/clients', clientRouter);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));

module.exports = app;

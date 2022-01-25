const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('../middlewares/errorMiddleware');
const route = require("../routes");
const { success } = require("../utils/statusCode");


const app = express();
app.use(bodyParser.json());

app.use(route);

app.get('/', (request, response) => {
  response.status(success).json({ message: "api ok!" });
});



app.use(errorMiddleware);
module.exports = app;

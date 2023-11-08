const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); // Assuming you have a Swagger config
require('dotenv').config();

const app = express();

app.use(express.json({ strict: false }));

const router = require('./routers'); // Import your router module
app.use('/api/v1', router); // Grouping API


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger UI

module.exports = app;

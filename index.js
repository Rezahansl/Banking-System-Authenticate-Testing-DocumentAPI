const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const router = require('./routers');

app.use(express.json({ strict: false }));
app.use('/api/v1', router); // Grouping API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger UI

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});

module.exports = app;

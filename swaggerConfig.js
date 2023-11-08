const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Basic-Banking-System-API',
      version: '1.0.0',
      description: 'Users, Account, Transaction',
    },
  },
  apis: [path.join(__dirname, 'swagger.yaml')], // Sesuaikan dengan path ke berkas definisi Swagger Anda.
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

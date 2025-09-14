
// src/config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'Task manager API with auth (JWT) and Swagger docs',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  apis: ['./src/routes/auth.js', './src/routes/task.js']

};

module.exports = swaggerJSDoc(options);

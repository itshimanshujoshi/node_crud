const PORT = process.env.PORT || 8000;

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "API documentation for User management",
      contact: {
        name: "Himanshu Joshi",
        email: "hjoshi365.hj@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name", "email", "address"],
          properties: {
            name: {
              type: "string",
              description: "User's name",
              example: "John Doe",
            },
            email: {
              type: "string",
              description: "User's email",
              example: "john.doe@example.com",
            },
            address: {
              type: "string",
              description: "User's address",
              example: "123 Main St, Springfield",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };

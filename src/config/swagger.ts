import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "Todo API documentation using Swagger",
    },
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], 
};

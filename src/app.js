// importando o fastify
const fastify = require("fastify");

// passando a funçao para uma constante
const app = fastify({ logger: true });


app.get("/", async (request, reply) => {
  reply.send({ message: "helo world" })
});

// exportando a constante como modulo
module.exports = app;

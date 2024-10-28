const app = require('./app')

// inicializando servidor
const start = async () => {

  // se tudo ocorre bem faça isso
  try {
    await app.listen({ port: 3000 })
    app.log.info(`server listening on http://localhost:3000`)

    // se der erro faça isso
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()
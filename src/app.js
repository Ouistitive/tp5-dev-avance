import fastify from "fastify"

export const build = (opts = {}) => {
    const app = fastify(opts)

    //app.register(fastifyFormbody)
    app.register(import("./routes/routes.js"))

    return app
}
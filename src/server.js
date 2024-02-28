import { readFileSync } from 'fs';
import { join } from "path";

const {build} = await import( "./app.js")

const app = build({
    logger: true,
    https: {
        key: readFileSync(join('', '..', 'tp5-dev-avance', 'server.key')),
        cert: readFileSync(join('', '..', 'tp5-dev-avance', 'server.crt'))
    }
})

const start = async () => {
    try {
        await app.listen({port: 3000})
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
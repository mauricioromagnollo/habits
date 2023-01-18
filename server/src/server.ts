import Fastify from "fastify"
import cors from '@fastify/cors'

import { routes } from "./routes"

const app = Fastify({ logger: true, pluginTimeout: 20000 })

app.register(cors, {
  origin: '*'
})
app.register(routes)


app.listen({
  port: 3333
})

import express from 'express'

const app = express()

const port = process.env.PORT;

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

console.log(`[Server] - Running at ${port}!`)

app.listen(port)
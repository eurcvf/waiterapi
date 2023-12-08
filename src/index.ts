import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017')
.then(() => {
  const app = express()

  const port = 3000

  app.use(express.json())

  app.listen(port, () => {
    console.log(`API conectada na porta ${port}`)
  })

  console.log('Conexão com o MongoDB feita com sucesso!')
})
.catch(() => console.log('Erro ao fazer a conexão como o MongoDB.'))


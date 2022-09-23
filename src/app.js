require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const sequelize = require('./db/db')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/clientes', require('./routes/clientes'))

app.listen(port, () => {
  console.log(`app listening on port ${port}`);

  sequelize.sync({force: true}).then(()=>{
    console.log('conectado a la bbdd')
  }).catch(err=>{
    console.log('error', err)
  })
})
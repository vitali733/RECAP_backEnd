const express = require('express')
const friesRoutes = require('./routes/friesRoutes.js')
const app = express()
const port = 4000
const connectDB = require('./db/connectDB.js')

connectDB()

app.use(express.json());
app.use('/', friesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const friesRoutes = require('./routes/friesRoutes.js')
const app = express()
const port = process.env.PORT || 4000
const connectDB = require('./db/connectDB.js')
const cors = require('cors')

app.use(cors())

connectDB()

app.use(express.json());
app.use('/', friesRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

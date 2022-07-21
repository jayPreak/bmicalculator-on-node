const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.use(express.static(__dirname))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
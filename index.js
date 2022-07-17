const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/yep', (req, res) => {
    res.send('Hello Worldgayge!')
  })

app.get('/nop', (req, res) => {
    res.send('notgaygeHello Worldgayge!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
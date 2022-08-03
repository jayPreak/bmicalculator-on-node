const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.post('/', (req, res) => {
  var age = req.body.age
  var gender = req.body.gender
  var height = req.body.height
  var weight = req.body.weight

  var p = [age, height, weight]

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100)

  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }


  res.render("index", {result:result,bmi:bmi})
  // res.send(result + ", your bmi is: " + bmi)
})

app.use(express.static(__dirname))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
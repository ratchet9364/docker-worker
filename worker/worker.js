require('dotenv').config()
const express = require('express')
const app = express()
const port = [3000,3100,3200,3300]
const randInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
let mult = false
let add = false
let task = {}

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
    app.post('/mult', (req, res) => {

      mult = true
      const { a, b } = req.body
      task = { a, b }
      console.log('mult', req.body)
      const duration = randInt(3000, 4000)
      setTimeout(() => {
        mult = false
        res.send(JSON.stringify({ res: a * b, duration }))
      }, duration)
    })

    app.post('/add', (req, res) => {

      add = true
      const { a, b } = req.body
      task = { a, b }
      console.log('add', req.body)
      const duration = randInt(3000, 4000)
      setTimeout(() => {
        add = false
        res.send(JSON.stringify({ res: a + b, duration }))
      }, duration)
    })

app.get('/', (req, res) => {
  if (mult) {
    res.send(JSON.stringify({ type: 'mult', task }))
    return
  }
  if (add) {
    res.send(JSON.stringify({ type: 'add', task }))
    return
  }
  res.send('ready to work')
})

for (i=0;i<port.length;i++){
  app.listen(port[i], () => {
    console.log(`Worker listening at http://localhost:${port}`)
  })
}
  

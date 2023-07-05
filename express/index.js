const express = require('express')

const app = express()

// get ==> read a file, post ==> create a file, put ==> update a file, delete ==> delete a file CRUD

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello Express</h1>')
})


const PORT = 7000
app.listen(PORT, console.log('app up and running'))
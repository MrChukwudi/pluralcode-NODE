const express = require('express')
const router = require('./Routes/blog')

const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
  res.send('i am working....')
})

app.use('/api/posts', router)


const port = 7000
app.listen(port,  () => console.log(`Server up and running on port ${port}`))
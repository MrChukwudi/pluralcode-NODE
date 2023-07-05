const path = require('path')
const fs = require('fs')
const http = require('http')

// const server = http.createServer((req, res) => {
//   if(req.url === '/'){
//     fs.readFile(path.join(__dirname, 'test', 'app.html'), 'utf8', (err, content) => {
//       if(err) throw err
//       res.end(content)
//     })
//   }
// })



const server = http.createServer((req, res) => {
  const pathfile = path.join(__dirname, 'test', req.url === '/' ? 'index.html' : `${req.url}.html`)
  fs.readFile(pathfile, 'utf8', (err, content) => {
    if(err) throw err
    res.end(content)
  })
})

server.listen(7000, console.log('server up and running...'))
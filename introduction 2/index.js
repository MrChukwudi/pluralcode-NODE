// const addNum = require('./app')
const path = require('path')
const fs = require('fs')
const os = require('os')
const http = require('http')

// console.log(addNum(5, 7))
// console.log(`my name is ${name}`)


//base name(actual file name)
// console.log(path.basename(__filename))

//directory name
// console.log(path.dirname(__filename))

//extension name of a file
// console.log(path.extname(__filename))

//
// console.log(path.parse(__filename))

//join - concat
// console.log(path.join(__dirname, 'backend', 'dev.html'))

// console.log(fs.mkdir(path.join(__dirname, './dev'), {}, (err) => {
//   if(err) throw err
//   console.log('folder created')
// }))

// console.log(fs.writeFile(path.join(__dirname, 'public', 'index.html'), '<h1>Hello World</h1>', (err) => {
//   if(err) throw err
//   console.log('File created and content has been written ito it')
// }))

// console.log(fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, res) => {
//   if(err) throw err
//   console.log(res)
// }))

// console.log(fs.rename(path.join(__dirname, 'public', 'index.html'), path.join(__dirname, 'public', 'charles.html'), (err) => {
//   if(err) throw err
//   console.log('file renamed...')
// }))

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.totalmem())

// http
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, content) => {
      if(err){
        fs.readFile(path.join(__dirname, 'test', 'error.html'), 'utf8', (err, data)=>{
          res.end(data)
        })
      }
      res.end(content)
    })
  }
  if(req.url === '/about'){
    fs.readFile(path.join(__dirname, 'public', 'charles.html'), 'utf8', (err, content) => {
      if(err){
        fs.readFile(path.join(__dirname, 'test', 'error.html'), 'utf8', (err, data)=>{
          res.end(data)
        })
      }
      res.end(content)
    })
  }
})

// const server = http.createServer((req, res) => {
//   const pathfile = path.join(__dirname, 'test', req.url === '/' ? 'index.html' : `${req.url}.html`)
//   fs.readFile(pathfile, (err, content) => {
//     if(err) throw err
//     res.end(content)
//   })
// })

server.listen(5000, console.log("server started...."))
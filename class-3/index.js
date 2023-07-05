const express = require('express')
const products = require('./product')

const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
  res.send('Hello World')
})

// create a product
app.post('/api/products', (req, res) => {
  const {name, price, description, color, category, image} = req.body
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
    color,
    category,
    image
  }

  const saveProduct = products.push(newProduct)

  if(saveProduct){
    res.json({message: "product created", products})
  }else{
    throw new Error("Unable to create product")
  }
})

//fetch all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

//fetch single products
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id))
  if(product){
    res.json(product)
  }else{
    throw new Error('product not found')
  }
})

//fetch all products by category
app.get('/api/products/cat/:catName', (req, res) => {
  const productCat = products.filter(p => String(p.category).toLowerCase() == req.params.catName)
  if(productCat){
    res.json(productCat)
  }else{
    throw new Error('I am tired of you...')
  }
})




const PORT = 5000
app.listen(PORT, console.log(`server up and running on port ${PORT}....`))
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const posts = require('../blogdatabase')


// Get all Posts
router.get('/', (req, res) => {
  res.json(posts)
})

// create a post
router.post('/', (req, res) => {
  const {title, body, likes, author} = req.body
  const newPost = {
    id: uuidv4(),
    title,
    body,
    likes,
    author,
    comments: []
  }

  const savePost = posts.push(newPost)
  if(savePost){
    res.json({message: "Post created", posts})
  }else{
    throw new Error('unable to save Post')
  }
})

//fetch a single post by Id
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id)
  if(post){
    res.json(post)
  }else{
    throw new Error('Post not found')
  }
})


//create a comment
router.post('/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id)
  const {body, author} = req.body
  if(post){
    newComment = {
      id: uuidv4(),
      body,
      author
    }
    const saveComment = post.comments.push(newComment)
    if(saveComment){
      res.json(post)
    }else{
      throw new Error('Comment not saved')
    }
  }else{
    throw new Error('Post not found')
  }
})

// increase the likes of a post
router.put('/:id/likes', (req, res) => {
  const post = posts.find(p => p.id === req.params.id)
  if(post){
    post.likes = post.likes + 1
    res.json(post)
  }else{
    throw new Error('Post not found')
  }
})



//fetch all post by author
router.get('/author/:name', (req, res) => {
  const post = posts.filter(p => String(p.author).toLowerCase() === req.params.name)
  if(post){
    res.json(post)
  }else{
    throw new Error(`Post by ${req.params.name} was not found`)
  }
})



module.exports = router
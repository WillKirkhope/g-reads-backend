const express = require("express")
const router = express.Router()

const queries = require("../db/queries")

router.get('/', (req,res,next) => {
    queries.list('book')
    .then(book => {
        res.json({book})
    })
})

router.get('/:id', function(request,response){
  queries.read("book", request.params.id).then(book => {
      book
          ? response.json({book})
          : response.status(404).json({message: 'Not found'})
  })
})

router.post('/', function(request,response,next){
  queries.post("book", request.body)
  .then(newForm => {
    response.status(201).json({newForm})
  })
})

router.put('/:id', function(request,response,next){
  queries.update("book", request.params.id, request.body)
  .then(updatedForm => response.json(updatedForm))
})

router.delete('/:id', function(request,response,next){
  queries.deleteOne("book", request.params.id)
  .then(() => {
    response.status(204).json()
  })
})

router.use(function(error,request,response,next){
  console.error(error.stack)
  response.status(400).send('Error Something Went Wrong')
})

 module.exports = router

const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/users')
router.get('/users', usercontroller.index)
let users = [
  {id: 1, nama: "Bangjoule", email: "epiczakung17@gmail.com"},
  {id: 2, nama: "Zaen", email: "Zaeputra@gmail.com"},
  {id: 3, nama: "Kakvela", email: "Vel@gmail.com"}
]


router.get('/users', usercontroller.index )

  router.post('/users', usercontroller.store)
  
  router.put('/users/:id', usercontroller.update)
  
  router.delete('/users/:id', usercontroller.delete)

  module.exports =router
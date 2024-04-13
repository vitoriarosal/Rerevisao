const express = require('express')
const alunoController = require('../controllers/AlunoController')
const router = express.Router()
const Aluno = require ('../models/Aluno')

router.get('/', function(req, res){
    res.json({})
})

//Produtos
router.get('/alunos', (req, res)=> alunoController.getAll(req, res))
router.post('/alunos', (req, res)=> alunoController.create(req, res))



module.exports = router
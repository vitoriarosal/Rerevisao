const {json} = require("express");
const aluno = require("../models/Aluno")

const alunoController = {
    getAll: async (req, res) => {
        res.json( await aluno.find() )

    },

    getAprovados: async (req, res) => {

        res.json(await Aluno.find({media: {$gt: 7}}))
    },

    getReprovados: async(req, res) => {

        res.json(await Aluno.find ({media: {$lt: 5}}))
    },

    getRecuperacao: async(req, res) => {
        res.json(await Aluno.find({media: {$gt}}))
    }

    get: async (req, res) => {

        try {
            res.json( await aluno.findById(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },

    create: async (req, res) => {
        try {


            let soma = 0 

            const notas =  req.body.notas
            const alunos = req.body

            for(let n of notas){

               if(n > 0 || n < 10){

                    return res.status(400).json({message: "deu ruim"})
                }
            soma += n 
        }
        const media = soma / notas.length

        alunos.media = media

            res.json( await aluno.create(req.body) )
            
        } catch (error) {
            res.status(400).json(error) 
        }
    },
    update: async (req, res) => {
        try {
            res.json( await aluno.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }
    },
    delete: async (req, res) => {
        
        try {
            res.json( await aluno.findByIdAndDelete(req.params.id) )
            
        } catch (error) {
            res.status(404).json({error:'Registro não encontrado'}) 
        }



    },






}
module.exports =  alunoController
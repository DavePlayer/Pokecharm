import express, { query } from 'express'
import DataBase from './../database'
import { verifyToken } from '../middlewares/jwtVerify'
import { type } from 'os'
const emailCheck = require('email-check')

export const authRouter:express.Router = express.Router()

authRouter.get('/login' , (req:express.Request, res:express.Response) => {
    console.log(req.query)
    const {email, password} = req.query
    if( typeof email == 'string' && typeof password == 'string')
        DataBase.validateUser(email, password)
        .then( (o:any) => {
            res.json(o)
        } )
        .catch( (err) => {
            res.send(err)
        })
        else
            res.sendStatus(400).json({status: "error", err: "bad request send"})
})

authRouter.get('/test', verifyToken, (req:any, res:express.Response) => {
    res.json({status: 'token validated properly', id: req.id})
})

authRouter.post('/register' , (req:express.Request, res:express.Response) => {
    emailCheck(req.body.email)
    .then( (o:any) => {
        if(!o){
            res.json({status: 'error', err: 'Email doesn\'t exist'})
        } else {
        console.log(req.body)
            DataBase.registerUser(req.body)
            .then (o => {
                res.json(o)
            })
            .catch( err => {
                res.json(err)
            })
        }
    })
})
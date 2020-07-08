import express from 'express'
import DataBase from './../database'
const emailCheck = require('email-check')

export const auth: express.Router = express.Router()

auth.get('/login' , (req:express.Request, res:express.Response) => {
    const {email, password}:{email: string, password:string} = req.body
    DataBase.validateUser(email, password)
    .then( (o:any) => {
        res.json(o)
    } )
    .catch( (err) => {
        res.send(err)
    })
})

auth.post('/register' , (req:express.Request, res:express.Response) => {
    emailCheck(req.body.email)
    .then( (o:any) => {
        if(!o){
            res.json({status: 'error', err: 'Email doesn\'t exist'})
        } else {
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
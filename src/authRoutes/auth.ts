import express from 'express'
import DataBase from './../database'

export const auth: express.Router = express.Router()

auth.get('/login' , (req:express.Request, res:express.Response) => {
    DataBase.fetchUser('\'daveplayer2001@gmail.com\'', 'Maslo123')
    .then( (o:any) => {
        res.json({mam: 1, o})
    } )
})

auth.post('/register' , (req:express.Request, res:express.Response) => {
    res.send('register')
})
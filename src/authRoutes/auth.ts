import express from 'express'

export const auth: express.Router = express.Router()

auth.get('/login' , (req:express.Request, res:express.Response) => {
    res.send('login')
})

auth.post('/register' , (req:express.Request, res:express.Response) => {
    res.send('register')
})
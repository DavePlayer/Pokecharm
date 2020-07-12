import express from 'express'
import { Router } from './authRoutes/combined'
require('dotenv').config()
import DataBase from './database'

const app: express.Application = express()
app.use(express.json())

DataBase.connect()

app.get('/', (req:express.Request, res:express.Response) => {
    res.send('works')
})

app.use('/', Router)

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`)
})

console.log("ready perfectly")
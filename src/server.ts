import express from 'express'
import { authRoute } from './authRoutes/combined'
require('dotenv').config()

const app: express.Application = express()



app.get('/', (req:express.Request, res:express.Response) => {
    res.send('works')
})

app.use('/auth', authRoute)

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`)
})

console.log("ready perfectly")
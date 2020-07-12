import express from 'express'
import { authRouter } from './auth'
import { dataRouter } from './dataMenagment'

export const Router: express.Router = express.Router()

Router.use('/auth', authRouter)
Router.use('/data', dataRouter)


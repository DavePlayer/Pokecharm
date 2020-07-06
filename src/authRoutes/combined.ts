import express from 'express'
import { auth } from './auth'

export const authRoute: express.Router = express.Router()

authRoute.use('/', auth)


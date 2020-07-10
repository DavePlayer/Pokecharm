import jwt from 'jsonwebtoken'
import express from 'express'
import { type } from 'os'

export const verifyToken = (req:any, res:express.Response, next:express.NextFunction) => {
        const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]
        if(token == null)
        res.sendStatus(401)
        else
        jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err:any, email:any) => {
            err ?
            res.sendStatus(403)
            :
            req.email = email
            next()
        })
}
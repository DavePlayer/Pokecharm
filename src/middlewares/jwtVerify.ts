import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import express from 'express'
import { type } from 'os'

export const verifyToken = (req:any, res:express.Response, next:express.NextFunction) => {
        const token = req.headers['authorization'] //&& req.headers['authorization'].split(' ')[1]
        if(req.headers['authorization'] == null)
            res.sendStatus(401)
        else
        jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err:any, id:any) => {
            if(err){
                res.sendStatus(403)
            } else {
                req.id = id.id
                next()
            }
        })
}
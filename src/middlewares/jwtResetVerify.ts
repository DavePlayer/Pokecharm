import jwt from 'jsonwebtoken'
import express from 'express'

export const verifyResetToken = (req:any, res:express.Response, next:express.NextFunction) => {
        const token = req.headers['authorization'] //&& req.headers['authorization'].split(' ')[1]
        if(req.headers['authorization'] == null)
            res.sendStatus(401)
        else
        jwt.verify(token, `${process.env.RESET_PASSWORD_TOKEN_SECRET}`, (err:any, id:any) => {
            if(err){
                res.json({status: 'error', err: 'token is not valid or expired'})
            } else {
                req.id = id.id,
                req.token = token
                next()
            }
        })
}
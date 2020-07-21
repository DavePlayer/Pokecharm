import express from 'express'
import { verifyToken } from '../middlewares/jwtVerify'
import DataBase from '../database'
import { getTableName } from '../getTableName'

export const dataRouter: express.Router = express.Router()

dataRouter.get('/getCatchStatus', verifyToken ,(req: any, res: express.Response) => {
    const tableName = getTableName(req.query.gameVersion, req.query.pokedex)
    DataBase.fetchCatchStatus(req.id, tableName)
    .then( o => res.json(o))
    .catch(o => res.json(o))
})
dataRouter.post('/insertCatchStatus', verifyToken ,(req: any, res: express.Response) => {
    console.log(req.body)
    DataBase.insertCatchStatus({
        type: 'insertData',
        tableName: getTableName(req.body.gameVersion, req.body.pokedex),
        pokemonName: req.body.pokemonName,
        status: req.body.status,
        shiny: req.body.shiny
    }, req.id,)
    .then( o => res.json(o))
    .catch(o => res.json(o))
})
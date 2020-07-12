import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import { rejects } from 'assert'
import { dataRouter } from './authRoutes/dataMenagment'

const db: mysql.Connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pokecharm'
})

interface IregisterData {
    type: 'registerData'
    name: string,
    email: string,
    phoneNumber: string,
    password: string
}
interface IInsertData {
    type: 'insertData'
    tableName: string,
    pokemonName: string,
    status: string,
    shiny: boolean
}

class DataBaseClass {
    constructor(){
        
    }

    connect = () => {
        db.connect((err) => {
            err ?
            console.log(`database error: ${err}`)
            :
            console.log(`connected to database`)
        })
    }

    validateUser = ( email:string, password?:string ) => new Promise((resolve, rej) => {
        const query = `SELECT * FROM users WHERE email =? && password=?`
        db.query(query, [email, password] , (err, res) => {
            if(err){
                rej({status: 'Error', err})
            } else {
                if(res.length == 0) {
                    resolve({status: 'Wrong data provided'})
                }
                const token = jwt.sign({id: res[0].id}, `${process.env.TOKEN_SECRET}`, {expiresIn: '3600s'})
                resolve({status: 'user fetched', token})
            }
        })
    })

    registerUser = (data:IregisterData) => new Promise((resolve, rej) => {
        if(data.type == 'registerData'){
            const arr = Object.entries(data)
            let trueData:any = []
            arr.map( (o, i) => {
                i !== 0 && (trueData = [...trueData, o[1]])
            })
            const query = `INSERT INTO users VALUES (null, ?, ?, ?, ?)`
            db.query(query, trueData, (err: any, res:mysql.OkPacket) => {
                if(!err){
                    const token = jwt.sign({id: res.insertId}, `${process.env.TOKEN_SECRET}`, {expiresIn: '3600s'})
                    resolve({status: "added new user", res, token})
                } else {
                    rej({status: "Error mf", err})
                }
            })
        }
    })

    fetchCatchStatus = (userId: number, tableName: string) => new Promise( (resolve, rej) => {
        const query = `SELECT * FROM ${tableName} WHERE userID = ?`
        db.query(query, [userId], (err:any, res:[]) => {
            if(!err){
                resolve({status: 'data fetched', data: res})
            } else {
                rej({status: 'error', err})
            }
        })
    })

    insertCatchStatus = (data: IInsertData, userId:number) => new Promise( (resolve, rej) => {
        if(data.type == 'insertData'){
            const checkifExist = new Promise<string>( (reso, rejj) => {
                db.query(`SELECT * FROM ${data.tableName} WHERE pokemonName=?`, [data.pokemonName], (err, res) => {
                    if(!err){
                        if(res.length == 1){
                            if(
                                (res[0].normalStatus != 'caught' && data.shiny == true && data.status != 'caught')
                                ||
                                (res[0].shinyStatus != 'caught' && data.shiny == false && data.status != 'caught')
                            )
                            reso(`DELETE FROM ${data.tableName} WHERE pokemonName=? AND userId=? `)
                            else if(data.shiny)
                            reso(`UPDATE ${data.tableName} SET shinyStatus=? WHERE pokemonName=? AND userId=?`)
                            else
                            reso(`UPDATE ${data.tableName} SET normalStatus=? WHERE pokemonName=? AND userId=?`)
                        } else {
                            if(data.status != 'uncaught'){
                                if(data.shiny == true) {
                                    reso(`INSERT INTO ${data.tableName}(pokemonName, userId, shinyStatus) VALUES ( ?, ?, ?)`)
                                } else {
                                    reso(`INSERT INTO ${data.tableName}(pokemonName, userId, normalStatus) VALUES ( ?, ?, ?)`)
                                }
                            } else {
                                rej({status: 'error', err: 'tried to delete not existing data'})
                            }
                        }              
                    } else {
                        rej({status: 'error', err})
                    }
                })
            })
            checkifExist
            .then(query => {
                console.log(query, userId)
                console.log(data)
                db.query(query, [ data.pokemonName, userId, data.status], (err:any, res:mysql.OkPacket) => {
                    if(!err){
                        resolve({status: 'data inserted'})
                    } else {
                        rej({status: 'error', err})
                    }
                })
            })
        } else {
            rej({status: 'error', err: "wrong data type send"})
        }
    })
}

const DataBase = new DataBaseClass()
export default DataBase
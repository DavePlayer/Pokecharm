import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import { rejects } from 'assert'
import { dataRouter } from './authRoutes/dataMenagment'
import bcrypt from 'bcryptjs'

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
        try{
            db.connect((err) => {
                if(err){
                    console.log(`database error: ${err}`)
                } else {
                    console.log(`connected to database`)
                }
            })
        } catch (err) {
            console.log(`database error: ${err}`)
                setTimeout(() => {
                    this.connect()
                }, 1000)
        }
    }

    validateUser = ( email:string, password:string ) => new Promise((resolve, rej) => {
        const query = `SELECT * FROM users WHERE email =?`
        db.query(query, [email] , (err, res) => {
            if(err){
                rej({status: 'error', err: "server can't connect to database. we are sory"})
            } else {
                console.log(res, res[0].password, password, !bcrypt.compareSync(password, res[0].password))
                if(res.length == 0 || !bcrypt.compareSync(password, res[0].password)) {
                    rej({status: 'error', err: "Wrong data provided"})
                } else {
                    const token = jwt.sign({id: res[0].id}, `${process.env.TOKEN_SECRET}`, {expiresIn: '3600s'})
                    resolve({status: 'user fetched', token, name: res[0].name})
                }
            }
        })
    })

    registerUser = (data:IregisterData) => new Promise((resolve, rej) => {
        if(data.type == 'registerData'){
            const salt = bcrypt.genSaltSync(10)
            data.password = bcrypt.hashSync(data.password, salt)
            const arr = Object.entries(data)
            let trueData:any = []
            arr.map( (o, i) => {
                i !== 0 && (trueData = [...trueData, o[1]])
            })


            const query = `INSERT INTO users VALUES (null, ?, ?, ?, ?, null)`
            db.query(query, trueData, (err: any, res:mysql.OkPacket) => {
                if(!err){
                    console.log(`user added ${data.name}`)
                    const token = jwt.sign({id: res.insertId}, `${process.env.TOKEN_SECRET}`, {expiresIn: '3600s'})
                    resolve({status: "added new user", res, token})
                } else {
                    console.log('error', err)
                    rej({status: "Database Error", err})
                }
            })
        } else {
            rej({status: 'error', err: 'unvalid data sent'})
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
                                    reso(`INSERT INTO ${data.tableName}(shinyStatus, pokemonName, userId) VALUES ( ?, ?, ?)`)
                                } else {
                                    reso(`INSERT INTO ${data.tableName}(normalStatus, pokemonName, userId) VALUES ( ?, ?, ?)`)
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
                let validateArray = [data.status, data.pokemonName, userId]
                console.log(query, userId)
                console.log(data)
                if(query == `DELETE FROM ${data.tableName} WHERE pokemonName=? AND userId=? `){
                    validateArray = [data.pokemonName, userId]
                }
                db.query(query,validateArray , (err:any, res:mysql.OkPacket) => {
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

    sendResetPasswordUrl = (email: string) => new Promise<{status: string, err?: any, data?: string}>((res, rej) => {
        db.query('SELECT id FROM users WHERE email = ?', [email], (err, data) => {
            if(!err){
                if(data.length > 0){
                    console.log('user exist', data)
                    // const token = jwt.sign({id: data[0].id}, `${process.env.TOKEN_SECRET}`, {expiresIn: '3600s'})
                    res({status:'OK', data: 'user exists'})
                } else {
                    console.log('user dosen\'t exist')
                    rej({status: 'error', err: 'user dosen\'t exist'})
                }
            } else {
                console.log(err)
                rej({status: 'error', err})
            }
        })
    })
}

const DataBase = new DataBaseClass()
export default DataBase
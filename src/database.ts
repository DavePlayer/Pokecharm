import mysql, { MysqlError } from 'mysql'
import { resolve } from 'path'

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
                rej({status: 'Error', data: err})
            } else {
                if(res.length == 0) {
                    resolve({status: 'no users found'})
                }
                resolve({status: 'user fetched'})
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
            db.query(query, trueData, (err, res) => {
                if(!err){
                    resolve({status: "added new user", res})
                } else {
                    rej({status: "Error mf", err})
                }
            })
        }
    })
}

const DataBase = new DataBaseClass()
export default DataBase
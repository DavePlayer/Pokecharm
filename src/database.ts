import mysql from 'mysql'
import { resolve } from 'path'

const db: mysql.Connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pokecharm'
})

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

    fetchUser = ( email:string, password?:string ) => new Promise((resolve, rej) => {
        const query = `SELECT * FROM users WHERE email =? && password=?`
        db.query(query, [email, password] , (err, res) => {
            if(err){
                console.log(`query error: ${err}`)
                rej({status: 'Error', data: err})
            } else {
                console.log('user fetched', res)
                resolve({status: 'user fetched', data: res})
            }
        })
    }) 
}

const DataBase = new DataBaseClass()
export default DataBase
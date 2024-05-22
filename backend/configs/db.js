import mysql from 'mysql'

const connectDB=()=>{
    let db
    return db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"triggers"
})}

export default connectDB
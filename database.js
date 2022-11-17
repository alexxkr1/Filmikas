require('dotenv').config();
const {
    createPool
} = require("mysql");

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

pool.query('SELECT * FROM product', (err , result, field) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
});

module.exports = pool;
const {Pool} = require('pg')
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE} = process.env
const db = new Pool({
    user: 'postgres',
    password: '1qa2ws3E',
    host : 'localhost',
    port: 5432,
    database : 'tasksdb'
})

module.exports = db
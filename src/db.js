const {Pool} = require('pg')

const db = new Pool({
    user: 'postgres',
    password: '1qa2ws3E',
    host : 'localhost',
    port: 5432,
    database : 'tasksdb'
})

module.exports = db
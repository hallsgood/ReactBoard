const express = require('express')
const router = express.Router()
const mysql = require('../databaseConnection')




router.post('/', (req, res) => {
    console.log(`server insert board in`);
    console.log(`52`,req.body);
    const param = req.body.params
    
    let params = [param.title, param.context]
    let sql = `insert into rdb.board (id, title, context) values('asdf' ,?,?)`
    mysql.query(sql,params, (err, rows,fields) => {
        if (!err) {
            console.log(`board insert success! `);
        } else {
            console.log(`board insert err `)
        }
    })
})



module.exports = router
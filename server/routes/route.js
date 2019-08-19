const express = require('express')
const router = express.Router()
const mysql = require('../databaseConnection')




router.get('/test', (req, res) => {
    console.log('ㅎㅇ');
    
    mysql.query(`select * from test`, (err, rows) => {
        if (!err) {
            console.log(`hi! mysql`, rows);
            
            //console.log(rows);
            
            res.send(rows)
            
        } else {
            console.log(`err`)
            res.send(err)
        }
    })
})



module.exports = router
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors');
const morgan = require('morgan')
const user = require('./routes/user')
const board = require('./routes/board')
const bodyParser = require('body-parser')

// install cors 로 설치 하였기 때문에 cors 모듈 require
const PORT = process.env.PORT || 5000
// cors () 사용  // 모든 도메인에 대한 Request 활성화  -> 좋지 않은 방식 
app.set('port', PORT)
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public/')))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use('/user', user)
app.use('/boardwrite', board)



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});
app.use(morgan('combined'))
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
});

app.listen(PORT, () => {
    console.log(`now listening port ${PORT}`);
})

app.options('/boardwrite', (req, res) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header('Access-Control-Allow-Headers', 
   'Content-Type, Authorization, Content-Length, X-Requested-With');
   res.send(); 
});
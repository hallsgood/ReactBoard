const express = require('express')
const path = require('path')
const router = require('./routes/route')

const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 5000
const morgan = require('morgan')
// install cors 로 설치 하였기 때문에 cors 모듈 require

// cors () 사용  // 모든 도메인에 대한 Request 활성화  -> 좋지 않은 방식 
app.set('port', PORT)
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public/')))
app.use('/', router)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(morgan('combined'))
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`now listening port ${PORT}`);
})

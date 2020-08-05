var express = require('express')
var moment = require('moment')

var app = express()

// for hosting static files (html)
app.use(express.static('public'))

const log = (message)=>{
    let time = moment().format()
    console.log(`[Server]@ ${time} ${message}`)
}

// add two numbers together
const sum = (n1,n2) => n1 + n2;

// endpoint to do simple additions.
app.get('/adder',function (req,res) {
    console.log()
    let num1 = parseInt(req.query.num1),
        num2 = parseInt(req.query.num2),
        result = sum(num1,num2);
    res.send(`${result}`)
})

// log('test');



// liston to the port 3000
app.listen(4000,function () {
    console.log('web server running at: http://localhost:4000')
})
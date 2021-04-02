var express =require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')



var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',express.static('dist/redField'));



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})

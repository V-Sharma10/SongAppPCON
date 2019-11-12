var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var bodyParser = require('body-parser');
var cors = require('cors')
var port = process.env.PORT||5010;
var API_URL = "http://starlord.hackerearth.com/studio";
var axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(API_URL);
    axios.get(API_URL).then((result)=>{
        console.log(result.data);
        res.send(result.data);
    }).catch((error)=>console.log(error));
})

app.listen(port, (error) => 
{
    if(!error)
    console.log(` server listening on port ${port}. `);
    else{
        console.log('Something went wrong', error);
    }
})
var express = require('express');
var cors = require('cors');
var app = express();
//app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/getName', function (req, res) {
    var value = req.query.name;
    if (value == 'hiep')
        res.send({'appAsyncGetName':true});
    else res.send({'appAsyncGetName':false});
});

app.post('/api/testpost', function (req, res) {
    console.log(req);
    res.send('post!')
});
app.listen(3456);
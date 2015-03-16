var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 5000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/tests'));
app.use(express.static(__dirname + '/js'));

app.get('/', function (req, res) {
  res.render('index', { title: 'CSV' });
})

app.get('/tests', function (req, res) {
  res.render('tests', { title: 'CSV Test' });
});

app.get('/csv', function (req, res) {
    var isAjaxRequest = req.xhr;
    console.log(isAjaxRequest);
    if (isAjaxRequest) {
        console.log(req.query);
        res.send(analizar())
    }
    else {
        res.send('not an ajax request');
    }
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

function analizar(){
    
    var string = [];
    string.push("Array");
    string.push("toJSON");
    var json = JSON.stringify(string);
    console.log(json);
    return json;
}
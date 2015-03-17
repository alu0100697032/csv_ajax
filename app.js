var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var _ = require('underscore');

app.set('port', (process.env.PORT || 5000));
//app.set('IP', (process.env.IP || 'localhost'));

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

    res.send(analizar(req.query));

});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});



function analizar(cadena){
    
    var csv_text = cadena.csv_text;
    var regexp = /\s*"((?:[^"\\]|\\.)*)"\s*,?|\s*([^,]+),?|\s*,/g;
    var lines = csv_text.split(/\n+\s*/);
    var html_text = [];
    var commonLength = NaN;
    //underscore
    var row = "<% _.each(item, function(cell){%>"+ 
              "<td><%=cell%></td>"+    
              "<%}); %>";
    
    for (var i in lines){
        var matching = lines[i].match(regexp);
        var t_row = []; //treated row
        var error = false;
        if(matching){
            if (commonLength && (commonLength != matching.length)) {
                error = true;
            }
            else {
                commonLength = matching.length;
                error = false;
            }
            for(var j in matching){
                var value = matching[j].replace(/,\s*$/,''); //remove comma
                value = value.replace(/^\s*"/,''); //remote first quote
                value = value.replace(/"\s*$/,''); //remote last quote
                value = value.replace(/\\"/,'"'); //remove scaped quotes
                t_row.push(value);
            }
            //underscore
            var tr_type = error? '<tr style="background-color:red;">': '<tr>';
            html_text.push(tr_type + _.template(row, {item : t_row}) + '</tr>');
        }else{
            alert("Invalid CSV format!");
        }
    }
    html_text.unshift('<table class="table table-bordered">');
    html_text.push('</table>');
    return html_text;
};
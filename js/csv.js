exports.analizar = function(cadena){
    
    var csv_text = cadena.csv_text;
    var regexp = /\s*"((?:[^"\\]|\\.)*)"\s*,?|\s*([^,]+),?|\s*,/g;
    var lines = csv_text.split(/\n+\s*/);
    var html_text = '';
    var commonLength = NaN;
    
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
            var tr_type = error? '<tr style="background-color:red;">': '<tr>';
            var row = '';
            t_row.forEach(function(td, index){
               row = row + '<td>' + td + '</td>'; 
            });
            html_text = html_text + tr_type + row + '</tr>';
        }else{
            alert("Invalid CSV format!");
        }
    }
    html_text = '<table class="table table-bordered">' + html_text + '</table>';
    return html_text;
};
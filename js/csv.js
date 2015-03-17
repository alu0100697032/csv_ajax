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
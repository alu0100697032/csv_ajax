var assert = chai.assert;

suite('csv', function() {

    /*setup(function() {
        if (typeof __html__ !== 'undefined') {
            document.body.innerHTML = __html__['tests/index.html'];
            csv_text = document.getElementById('csv_text');
            tabla = document.getElementById('tabla');
        }
    });*/
    suite('CSV to Table', function() {
        test('Tabla con un sólo elemento', function() {
            csv_text.value = '1elemento';
            $.get("/csv", {csv_text: csv_text.value}, function(data) {
                $("#tabla").html(data);
                console.log("jquery");
            });
            assert.deepEqual($("#tabla").html(), '<table class="table table-bordered">\n<tbody><tr><td>1 elemento</td></tr>\n</tbody></table>')
        });
        /*test('Tabla con dos elementos', function() {
            csv_text.value = "1 elemento, 2 elementos";
            analizar();
            assert.deepEqual(tabla.innerHTML, '<table class="table table-bordered">\n<tbody><tr><td>1 elemento</td><td> 2 elementos</td></tr>\n</tbody></table>')
        });
        test('Tabla con dos filas', function() {
            csv_text.value = "1 elemento, 2 elementos \n 3 elementos, 4 elementos";
            analizar();
            assert.deepEqual(tabla.innerHTML, '<table class="table table-bordered">\n<tbody><tr><td>1 elemento</td><td> 2 elementos </td></tr>\n<tr><td>3 elementos</td><td> 4 elementos</td></tr>\n</tbody></table>')
        });
        test('Tabla con elementos vacios', function() {
            csv_text.value = "1 elemento, \n , 4 elementos";
            analizar();
            assert.deepEqual(tabla.innerHTML, '<table class="table table-bordered">\n<tbody><tr><td>1 elemento</td><td> </td></tr>\n<tr><td></td><td> 4 elementos</td></tr>\n</tbody></table>')
        });
        test('Tabla con sólo elementos vacios', function() {
            csv_text.value = " , \n , ";
            analizar();
            assert.deepEqual(tabla.innerHTML, '<table class="table table-bordered">\n<tbody><tr><td> </td><td> </td></tr>\n<tr><td></td><td> </td></tr>\n</tbody></table>')
        });
        test('Tabla con segunda fila errónea(pequeña)', function() {
            csv_text.value = "1 elemento, 2 elementos \n 3 elementos";
            analizar();
            assert.deepEqual(tabla.innerHTML, '<table class="table table-bordered">\n<tbody><tr><td>1 elemento</td><td> 2 elementos </td></tr>\n<tr style="background-color:red;"><td>3 elementos</td></tr>\n</tbody></table>')
        });
        test('Tabla con segunda fila errónea(grande)', function() {
            csv_text.value = "1 elemento, 2 elementos \n 3 elementos, 4 elementos, demasiados";
            analizar();
            assert.deepEqual(tabla.innerHTML, '<table class="table table-bordered">\n<tbody><tr><td>1 elemento</td><td> 2 elementos </td></tr>\n<tr style="background-color:red;"><td>3 elementos</td><td> 4 elementos</td><td> demasiados</td></tr>\n</tbody></table>')
        });
    });
    suite('Error', function() {
        test('csv vacio', function() {
            csv_text.value = "";
            analizar();
            assert.deepEqual(undefined)
        });*/
    });
});
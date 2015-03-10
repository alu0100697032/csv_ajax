var assert = chai.assert;

suite('csv', function(){
    
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/index.html'];
          csv_text = document.getElementById('csv_text');
          tabla = document.getElementById('tabla');
      }
    });
    suite('CSV to Table', function(){
        test('Tabla con un sólo elemento', function(){
           csv_text.value = "1 elemento"; 
           analizar();
           assert.deepEqual(tabla.innerHTML, "A saber como queda la tabla")
        });
        test('Tabla con dos elementos', function(){
           csv_text.value = "1 elemento, 2 elementos"; 
           analizar();
           assert.deepEqual(tabla.innerHTML, "A saber como queda la tabla")
        });
        test('Tabla con dos filas', function(){
           csv_text.value = "1 elemento, 2 elementos \n 3 elementos, 4 elementos"; 
           analizar();
           assert.deepEqual(tabla.innerHTML, "A saber como queda la tabla")
        });
        test('Tabla con elementos vacios', function(){
           csv_text.value = "1 elemento, \n , 4 elementos"; 
           analizar();
           assert.deepEqual(tabla.innerHTML, "A saber como queda la tabla")
        });
        test('Tabla con sólo elementos vacios', function(){
           csv_text.value = " , \n , "; 
           analizar();
           assert.deepEqual(tabla.innerHTML, "A saber como queda la tabla")
        });
        test('Tabla con segunda fila errónea(pequeña)', function(){
           csv_text.value = "1 elemento, 2 elementos \n 3 elementos"; 
           analizar();
           assert.deepEqual(tabla.innerHTML, "A saber como queda la tabla")
        });
        test('Tabla con segunda fila errónea(grande)', function(){
           csv_text.value = "1 elemento, 2 elementos \n 3 elementos, 4 elementos, demasiados"; 
           analizar();
           assert.deepEqual(tabla.innerHTML, "A saber como queda la tabla")
        });
    });
    suite('Error', function(){
        test('csv vacio', function(){
           csv_text.value = ""; 
           analizar();
           assert.deepEqual("Debe de saltarla alerta, alert(...) pero no se como capturarla")
        });
    });
});
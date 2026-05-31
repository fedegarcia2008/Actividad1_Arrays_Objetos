document.getElementById('ing').addEventListener('click', () => {
    
    let datos = [
        {"emp": "","cat": "", "ant": '', "bruto": '', "jub": '', "sind": '', "obra": '', "premio": 0, "neto": ``},
    ]
    
    datos[0].emp = document.getElementById('n').value;
    datos[0].cat = document.getElementById('c').value;
    datos[0].ant = parseInt(document.getElementById('a').value);

    datos.forEach(empleado => {
        console.log(empleado);
    });

});
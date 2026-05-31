document.getElementById('ing').addEventListener('click', () => {
    
    let datos = [
        {"emp": "","cat": "", "ant": '', "bruto": '', "jub": '', "sind": '', "obra": '', "premio": 0, "neto": ``},
    ]
    
    datos[0].emp = document.getElementById('n').value;
    datos[0].cat = document.getElementById('c').value;
    datos[0].ant = parseInt(document.getElementById('a').value);

    datos.forEach(empleado => {
        if (empleado.cat == "A") {
            empleado.bruto = 1840;
        } else if (empleado.cat == "B") {
            empleado.bruto = 1080;
        } else {
            empleado.bruto = 2000;
        }

        empleado.jub = ((empleado.bruto * 11) / 100);
        
        empleado.sind = ((empleado.bruto * 4) / 100);
        
        empleado.obra = ((empleado.bruto * 3) / 100);
        
        if (empleado.ant > 17) {
            empleado.premio = 100;
        }
        
        empleado.neto = ((empleado.bruto + empleado.premio) - (empleado.jub + empleado.sind + empleado.obra));

        console.log(empleado);
    });

});
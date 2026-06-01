let datos = [];

document.getElementById('ing').addEventListener('click', () => {

    let empleado = {
        nom: document.getElementById('n').value,
        cat: document.getElementById('c').value,
        ant: parseInt(document.getElementById('a').value),
        bruto: 0,
        jub: 0,
        sind: 0,
        obra: 0,
        premio: 0,
        neto: 0
    };

    if (empleado.cat == "A") {
        empleado.bruto = 1840;
    } else if (empleado.cat == "B") {
        empleado.bruto = 1080;
    } else {
        empleado.bruto = 2000;
    }

    empleado.jub = empleado.bruto * 0.11;
    empleado.sind = empleado.bruto * 0.04;
    empleado.obra = empleado.bruto * 0.03;

    if (empleado.ant > 17) {
        empleado.premio = 100;
    }

    empleado.neto = (empleado.bruto + empleado.premio) - (empleado.jub + empleado.sind + empleado.obra);

    datos.push(empleado);
    
});

document.getElementById('ver').addEventListener('click', () => {
    salida.innerHTML = '';
    function mostrarEmpleados() {
        
       // let categC = 0; 
        let cantA = 0; let cantB = 0; let cantC = 0;
        //tabla de liquidacion

        let tabla = document.createElement('table');

        tabla.innerHTML = `
            <tr>
            <th>EMPLEADO</th>
            <th>CATEGORÍA</th>
            <th>ANTIGÜEDAD</th>
            <th>SUELDO BRUTO</th>
            <th>JUBILACIÓN</th>
            <th>SINDICATO</th>
            <th>OBRA SOCIAL</th>
            <th>PREMIO</th>
            <th>SUELDO NETO</th>
            </tr>
             `;
             
             datos.forEach(empleado => {

            if (empleado.cat == "A") {
                cantA++;
            } else if (empleado.cat == "B") {
                cantB++;
            } else {
             //   categC += empleado.neto;
                cantC++;
            }
            
            let fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${empleado.nom}</td>
            <td>${empleado.cat}</td>
            <td>${empleado.ant} años</td>
            <td>$${empleado.bruto}</td>
            <td>$${empleado.jub}</td>
            <td>$${empleado.sind.toFixed(2)}</td>
            <td>$${empleado.obra.toFixed(2)}</td>
            <td>$${empleado.premio}</td>
            <td>$${empleado.neto}</td>
            `;

            if (empleado.ant < 15) {
                fila.style.color = "red";
    } else if (empleado.ant > 20) {
        fila.style.color = "blue";
    }

    tabla.appendChild(fila);

});

salida.appendChild(tabla);
    }
    mostrarEmpleados();

    function netoC() {

        let tabla = document.createElement('table');
        let h2 = document.createElement('h2');
        h2.textContent = `Sueldo Neto - Categoría C`;
        tabla.innerHTML = `
            <tr>
            <th>EMPLEADO</th>
            <th>CATEGORÍA</th>
            <th>SUELDO NETO</th>
            </tr>
             `;

        datos.forEach(empleado => {
            if (empleado.cat == "C") {
                        let fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${empleado.nom}</td>
            <td>${empleado.cat}</td>
            <td>$${empleado.neto}</td>
            `;
            tabla.appendChild(fila);
                }
            });
            salida.appendChild(h2);
            salida.appendChild(tabla);
            
    }
    netoC();


        function liquidacionA() {
        
        let tabla = document.createElement('table');
        let h2 = document.createElement('h2');
        h2.textContent = `Liquidación - Categoría A`;
        tabla.innerHTML = `
            <tr>
            <th>EMPLEADO</th>
            <th>CATEGORÍA</th>
            <th>ANTIGÜEDAD</th>
            <th>SUELDO BRUTO</th>
            <th>JUBILACIÓN</th>
            <th>SINDICATO</th>
            <th>OBRA SOCIAL</th>
            <th>PREMIO</th>
            <th>SUELDO NETO</th>
            </tr>
             `;

        datos.forEach(empleado => {
            if (empleado.cat == "A") {
                        let fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${empleado.nom}</td>
            <td>${empleado.cat}</td>
            <td>${empleado.ant} años</td>
            <td>$${empleado.bruto}</td>
            <td>$${empleado.jub}</td>
            <td>$${empleado.sind.toFixed(2)}</td>
            <td>$${empleado.obra.toFixed(2)}</td>
            <td>$${empleado.premio}</td>
            <td>$${empleado.neto}</td>
            `;
            tabla.appendChild(fila);
                }
            });
            salida.appendChild(h2);
            salida.appendChild(tabla);
            
    }
    liquidacionA();

    function neto12() {

        let tabla = document.createElement('table');
        let h2 = document.createElement('h2');
        h2.textContent = `Empleados - Sueldo neto mayor a $1200`;
        tabla.innerHTML = `
            <tr>
            <th>EMPLEADO</th>
            <th>SUELDO NETO</th>
            </tr>
             `;

        datos.forEach(empleado => {
            if (empleado.neto > 1200) {
                        let fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${empleado.nom}</td>
            <td>$${empleado.neto}</td>
            `;
            tabla.appendChild(fila);
                }
            });
            salida.appendChild(h2);
            salida.appendChild(tabla);
            
    }
    neto12();

        function antMayor() {

        let tabla = document.createElement('table');
        let h2 = document.createElement('h2');
        h2.textContent = `Empleados con más de 6 años de antiguedad`;
        tabla.innerHTML = `
            <tr>
            <th>EMPLEADO</th>
            <th>ANTIGÜEDAD</th>
            </tr>
             `;

        datos.forEach(empleado => {
            if (empleado.ant > 6) {
                        let fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${empleado.nom}</td>
            <td>${empleado.ant} años</td>
            `;
            tabla.appendChild(fila);
                }
            });
            salida.appendChild(h2);
            salida.appendChild(tabla);
            
    }
    antMayor();


});
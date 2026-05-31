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

    empleado.neto = (empleado.bruto + empleado.premio) -
                    (empleado.jub + empleado.sind + empleado.obra);

    datos.push(empleado);
    console.log(empleado);
    
});

document.getElementById('ver').addEventListener('click', () => {
    function mostrarEmpleados() {
        salida.innerHTML = '';
        datos.forEach(empleado => {
            let h1 = document.createElement('h1');
            h1.textContent = `Nombre: ${empleado.nom} - Neto: $${empleado.neto}`;
            salida.appendChild(h1);
    });
    }
    mostrarEmpleados();
});
document.getElementById('categoria').addEventListener('change', function () {
    const categoria = this.value;

    const precios = {
        1: 53.27,
        2: 45.39,
        3: 41.85,
        4: 38.42
    };

    const valorPorHora = document.getElementById('valorPorHora');

    if (categoria) {
        valorPorHora.value = `$${precios[categoria]}`;
    }

    else {
        valorPorHora.value = '';
    }
});

document.getElementById('formularioSalario').addEventListener('submit', function (event) {
    event.preventDefault();

    const categoria = document.getElementById('categoria').value;
    const cantidadHoras = parseFloat(document.getElementById('cantidadHoras').value);
    const jubilacion = parseFloat(document.getElementById('jubilacion').value) / 100;
    const obraSocial = parseFloat(document.getElementById('obraSocial').value) / 100;
    const Ley23032 = parseFloat(document.getElementById('ley23032').value) / 100;
    const asignacionFamiliar = parseFloat(document.getElementById('asignacionFamiliar').value) || 0;

    const precios = {
        1: 53.27,
        2: 45.39,
        3: 41.85,
        4: 38.42
    };

    if (categoria, cantidadHoras) {
        const valorPorHora = precios[categoria];
        const salarioTotal = valorPorHora * cantidadHoras;

        document.getElementById('total').innerText = `total: $${salarioTotal.toFixed(2)}`


        
        // Calculos
        const horas50 = cantidadHoras * 0.5 * valorPorHora;
        const horas100 = cantidadHoras * valorPorHora;
        const jubilacion = salarioTotal * jubilacion;
        const obraSocial = salarioTotal * obraSocial;
        const ley23032 = salarioTotal * ley23032;
        
        const totalRemunerativo = cantidadHoras + horas50 + horas100;
        const totalNoRemunerativo = asignacionFamiliar;
        const totalDescuento = jubilacion + obraSocial + ley23032;
        
        

        document.getElementById('recibodesueldo').innerHTML = `
        <table>
        <thead>    
                <tr>
                    <th>Concepto</th>
                    <th>Cantidad</th>
                    <th>Remunerativo</th>
                    <th>Descuento</th>
                    <th>No Remunerativo</th>
                </tr>
              </thead>
                <tbody>  
                <tr>
                    <td>Horas 50%</td>
                    <td>${cantidadHoras * 0.5}</td>
                    <td>$${horas50.toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Horas 100%</td>
                    <td>${cantidadHoras}</td>
                    <td>$${horas100.toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Jubilación</td>
                    <td></td>
                    <td></td>
                    <td>$${jubilacion.toFixed(2)}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Obra Social</td>
                    <td></td>
                    <td></td>
                    <td>$${obraSocial.toFixed(2)}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Ley 23.032</td>
                    <td></td>
                    <td></td>
                    <td>$${ley23032.toFixed(2)}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Asignación Familiar</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>$${asignacionFamiliar.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
                <div>Total Remunerativo: $${totalRemunerativo.toFixed(2)}</div>
                <div>Total Descuento: $${totalDescuento.toFixed(2)}</div>
                <div>Total No Remunerativo: $${totalNoRemunerativo.toFixed(2)}</div>
                <div>Total Neto a Cobrar: $${(salarioTotal - totalDescuento + totalNoRemunerativo).toFixed(2)}</div>
       
         `;
    }
});

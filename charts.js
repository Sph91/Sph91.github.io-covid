const $grafica = document.querySelector("#grafica");
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


const datosCasos2022 = {
    label: "Casos por mes - 2022",
    data: [3917361, 3988916, 4942590, 5508629, 5659535, 5739680, 6034602, 7014510, 7089209, 7110993, 7125176, 7132792], 
    backgroundColor: 'rgba(54, 162, 235, 0.2)', 
    borderColor: 'rgba(54, 162, 235, 1)', 
    borderWidth: 1,
};
const datosMuertos2022= {
    label: "Muertes por mes - 2022",
    data: [296620 ,299525,306091, 318149, 323016, 324334, 325716, 329390, 330112, 330392, 330495, 330525], 
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 1,
};

new Chart($grafica, {
    type: 'bar',
    data: {
        labels: etiquetas,
        datasets: [
            datosCasos2022,
            datosMuertos2022,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
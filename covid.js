

const verDatos = async() =>{
    const respuesta = await fetch('https://api.covid19api.com/total/country/mexico');
    const mx = await respuesta.json();

    covid19 = mx

    for (let index = 0; index < mx.length; index++){

        document.getElementById('tabla').innerHTML += "<tr>" +
                                                      "<td>" + covid19[index]["Date"] + "</td>" +
                                                      "<td>" + covid19[index]["Confirmed"] + "</td>" +
                                                      "<td>" + covid19[index]["Deaths"] + "</td>" + 
                                                      "</tr>";

    }
};

function verPais(){

    var paises = document.getElementById('paises');
    var pais = paises.options[paises.selectedIndex].value;

    

const verDatosPorPais = async() =>{
    const respuesta = await fetch('https://api.covid19api.com/total/country/'+pais);
    const mx = await respuesta.json();

    covid19 = mx

    for (let index = 0; index < mx.length; index++){

        document.getElementById('tabla').innerHTML += "<tr>" +
                                                      "<td>" + covid19[index]["Date"] + "</td>" +
                                                      "<td>" + covid19[index]["Confirmed"] + "</td>" +
                                                      "<td>" + covid19[index]["Deaths"] + "</td>" + 
                                                      "</tr>";

    }
};

verDatosPorPais();
}


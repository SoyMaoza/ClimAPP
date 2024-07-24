const apiKey = 'cacc1793ffcc46d4816163615242407';
const locacionInput = document.getElementById('locacion');
const btnBuscar = document.getElementById('btn-buscar');
const temperaturalbl = document.getElementById('temperatura');
const descripcionlbl = document.getElementById('descripcion');
const icono = document.getElementById('icono-clima');

btnBuscar.addEventListener('click', buscarDatosClima);

function buscarDatosClima(){
    const locacion = locacionInput.value;
    //Realizamos la solicitud del clima a la API
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&lang=es&q=${encodeURIComponent(locacion)}`)
    .then(response => response.json())
    .then(data => {
        const{location, current} = data;
        const temperatura = current.temp_c;
        const iconoClima = current.condition.icon;
        const iconoURL = `https:${iconoClima}`;
        icono.setAttribute('src', iconoURL);
        icono.setAttribute('alt', current.condition.text);

        temperaturalbl.textContent = `${temperatura}°C`;
        descripcionlbl.textContent = current.condition.text;
    })
    .catch(error => {
        console.log('Error al obtener los datos del clima', error);
    })
}
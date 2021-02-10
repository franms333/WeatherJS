const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('City').value;
    

    weather.changeLocation(city);

    //DELIMITAR LA LOCALIZACIÓN POR EL LOCAL STORAGE
    storage.setLocationData(city);

    //OBTENER Y MOSTRAR CLIMA
    getWeather();

    //CERRAR EL MODAL: HAY QUE USAR JQUERY
    $('#locModal').modal('hide');
});



function getWeather(){
weather.getWeather()
.then(results => {
    ui.paint(results);
})
.catch(error => console.log(error));
}
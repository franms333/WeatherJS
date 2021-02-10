class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.tempMin = document.getElementById('w-temp-min');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp + ' C°';
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humedad relativa: ${weather.main.humidity}%`;
        this.dewpoint.textContent = `Punto de rocío: ${weather.main.feels_like} C°`;
        this.tempMin.textContent = `Temperatura mínima: ${weather.main.temp_min} C°`;
        this.wind.textContent = `Viento: ${weather.wind.speed} MPH`;
    }
}
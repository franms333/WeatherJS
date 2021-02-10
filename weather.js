class Weather{
    constructor(city){
        this.apikey = '097ea699527633b380bb50cdd49af99f';
        this.city = city; 
        // this.state = 'uk';
    }

    //FETCH CLIMA POR LA API
    async getWeather(){
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=metric&lang=sp`);

        const responseData = await response.json();

        return responseData;
    }

    //CAMBIAR LA LOCALIZACIÓN 
    changeLocation(city){
        this.city=city;
    }
}
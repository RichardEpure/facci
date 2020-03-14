import { getCoords } from "./geo";

export async function getWeather() {
    if (sessionStorage.lat == null || sessionStorage.long == null){
        getCoords();
    }

    const resp  = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + sessionStorage.lat + '&lon=' + sessionStorage.long + '&appid=fe56809196ba46fa9114730ffe71f7b5')
    .then((resp) => resp.json())
    .then((data) => {
        return {
            "temp": Math.round(data.main.temp - 273.15),
            "description": data.weather[0].description,
            "humidity": data.main.humidity,
            "windSpeed": data.wind.speed,
        }

    })

    .catch((error) => {
        console.log("failed to retrieve weather data");
        console.log(error);
        return null;
    });

    return resp;
}

getWeather();
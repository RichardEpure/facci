import { getCoords } from "./geo";

// Fetches current weather details for the current time and day.
export async function getWeather() {
    const coords = await getCoords();

    const resp  = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.long + '&appid=fe56809196ba46fa9114730ffe71f7b5')
    .then((data) => data.json())
    .then((data) => {
        return {
            "temp": Math.round(data.main.temp - 273.15),
            "description": data.weather[0].main,
            "humidity": data.main.humidity,
            "windSpeed": data.wind.speed,
            "pressure": data.main.pressure,
        }
    })
    .catch((error) => {
        console.trace(error);
        return null;
    });

    return resp;
}

// Fetches forecast details.
export async function getForecast() {
    const coords = await getCoords();

    const resp  = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + coords.lat + '&lon=' + coords.long + '&appid=fe56809196ba46fa9114730ffe71f7b5')
    .then((data) => data.json())
    .then((data) => {
        let resp = [];
        let day = [];
        for(let i=0; i<data.list.length; i++) {
            const unix_timestamp = data.list[i].dt;
            const date = new Date(unix_timestamp * 1000);
            let lastDate = date;
            if(i>0) {lastDate = new Date(data.list[i-1].dt * 1000);}
            const hours = date.getHours();

            if(date.getDate() !== lastDate.getDate())
            {
                resp.push(day);
                day = [];
            }

            day.push({
                "hours": hours,
                "temp": Math.round(data.list[i].main.temp - 273.15),
                "description": data.list[i].weather[0].main,
                "humidity": data.list[i].main.humidity,
                "pressure": data.list[i].main.pressure,
            });
        }
        return resp;
    })
    .catch((error) => {
        console.trace(error);
        return null;
    });

    return resp;
}
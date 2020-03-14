export async function getCoords() {
    return new Promise((resolve, reject) => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(
                    {
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                    }
                );
            });    
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    })
}

export async function getLocation() {
    const coords = await getCoords();

    const resp  = await fetch('https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=' + coords.lat + '%2C' + coords.long + '%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=Gp4J7-0f8fxKmy6r-eyIZVMfyEHirnnR2JOoGR1SC90')
    .then((resp) => resp.json())
    .then((data) => {
        return {
            "city":  data.Response.View[0].Result[0].Location.Address.City,
            "country":   data.Response.View[0].Result[0].Location.Address.State
        }

    })
    .catch((error) => {
        console.log("failed to retrieve location data");
        console.log(error);
        return null;
    });

    return resp;
}

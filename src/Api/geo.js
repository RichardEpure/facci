export function getCoords() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( function(position) {
            localStorage.lat = position.coords.latitude;
            localStorage.long = position.coords.longitude;
        });    
    } else {
        console.error("Geolocation is not supported by this browser!");
    }
}

export async function getLocation() {
    getCoords();
    console.log("long: " + localStorage.long);
    const resp  = await fetch('https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=' + localStorage.lat + '%2C' + localStorage.long + '%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=Gp4J7-0f8fxKmy6r-eyIZVMfyEHirnnR2JOoGR1SC90')
    .then((resp) => resp.json())
    .then((data) => {
        console.log({data});
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

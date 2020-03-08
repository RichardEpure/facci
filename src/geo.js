function getCoords() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( function(position) {
            sessionStorage.lat = position.coords.latitude;
            sessionStorage.long = position.coords.longitude;
        });    
    } else {
        console.error("Geolocation is not supported by this browser!");
    }
}

async function getLocation(){
    if (sessionStorage.lat == null || sessionStorage.long == null){
        getCoords();
    }

    const resp  = await fetch('https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=' + sessionStorage.lat + '%2C' + sessionStorage.long + '%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=Gp4J7-0f8fxKmy6r-eyIZVMfyEHirnnR2JOoGR1SC90', {mode: 'cors'})
    .then((resp) => resp.json()) 
    .then(function(data) {

        return {
            "city":  data.Response.View[0].Result[0].Location.Address.City,
            "country":   data.Response.View[0].Result[0].Location.Address.State
        }

    })

    .catch(function(error) {
        return null;
    });

    return resp;
}

console.log(getLocation());

//     'apikey': 'Gp4J7-0f8fxKmy6r-eyIZVMfyEHirnnR2JOoGR1SC90'

  

  
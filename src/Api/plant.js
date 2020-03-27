export async function getPlants()
{
    const response = await fetch('https://trefle.io/api/plants?token=aklPenJkNFlJQWR1ZGNZL2pmNGpzUT09', 
                        { 
                            headers:
                            {
                                'Access-Control-Allow-Origin': 'http://localhost:3000'
                            },
                            method: 'GET',
                            mode: 'cors'
                        })
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    console.log(response);
}
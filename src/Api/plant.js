const token = '?token=aklPenJkNFlJQWR1ZGNZL2pmNGpzUT09';
export var plants = [];

export async function getPlants()
{
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants${token}&page_size=100`)
        .then(data => data.json())
        //.then(data =>  data.filter(plant => plant.complete_data === true))
        .then(data =>
            {
                const response = data.map(plant => 
                    {
                        return {
                            name: plant.common_name ? plant.common_name : plant.scientific_name,
                            link: plant.link,
                            id: plant.id,
                        };
                    });
                return response
            })
        .catch(error => console.error(error));
    plants = response;
    return response;
}

export async function getPlant(link)
{
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${link}${token}`)
        .then(data => data.json())
        .then(data => 
            {
                return {
                    division: data.division ? data.division.name : null,
                    family: data.family ? data.family.common_name : null,
                    genus: data.genus ? data.genus.name : null
                }
            })
        .catch(error => console.error(error));
    return response;
}
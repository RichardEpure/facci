const token = '?token=aklPenJkNFlJQWR1ZGNZL2pmNGpzUT09';
export var plants = [];

export async function getPlants()
{
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants${token}&page_size=30`)
        .then(data => data.json())
        .then(data =>
            {
                const response = data.map(plant => 
                    {
                        return {
                            name: plant.common_name ? plant.common_name : plant.scientific_name,
                            link: plant.link,
                            id: plant.id
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
        .catch(error => console.error(error));
}
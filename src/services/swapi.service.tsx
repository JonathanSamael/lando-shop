import axios from "axios";

export async function getVehicles(){
    let response = await axios("https://swapi.dev/api/vehicles/");
    console.log(response.data.results);
    return response.data
}
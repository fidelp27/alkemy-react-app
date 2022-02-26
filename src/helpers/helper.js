import axios from "axios"

export async function getDishes() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}${process.env.REACT_APP_SERVER_KEY}&addRecipeInformation=true`)
        return  response.data.results;
    } catch(error) {
        console.error(error)
    }    
}

export async function searchDishes(query = "") {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URI}${process.env.REACT_APP_SERVER_KEY}&addRecipeInformation=true&query=${query}`)
        return response.data.results
    }catch (error) {
    console.log(error);
    }
}
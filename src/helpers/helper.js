import axios from "axios"

async function getDishes() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}${process.env.REACT_APP_SERVER_KEY}&addRecipeInformation=true`)
        return  response.data.results;
    } catch(error) {
        console.error(error)
    }    
}
export default getDishes
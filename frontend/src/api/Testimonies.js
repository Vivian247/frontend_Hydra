import axios from "axios";

const API_URL = 'http://localhost:3000/testimonies';

//making the funnction
 const listTestimonies = async () => {
    try{
        console.log("RUNNING LIST TESTIMONIES");
        const response = await axios.get(API_URL);
        console.log(response);
        return response.data;

    }catch(error)
    {
        console.error('Error occured while fetching the testimonies from the database:', error);
        throw error;
    }
 };

 export {listTestimonies};
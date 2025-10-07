import axios from "axios";

const BASE_URL = "http://localhost:8000";

//create instance from axios
const api = axios.create({
  baseURL: BASE_URL,
  headers:{
    "content-type":"application/json"
  }
});

export const getAllCategories = async () =>{
  
        const response = await api.get("/Categories");
        
        return response.data;

}

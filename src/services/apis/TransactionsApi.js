import axios from "axios";

const BASE_URL = "http://localhost:8000";

//create instance from axios
const api = axios.create({
  baseURL: BASE_URL,
  headers:{
    "content-type":"application/json"
  }
});

export const getAllTransactions = async () =>{
  
        const response = await api.get("/Transactions");
        
        console.log("response from getAllTransactions API ", response);
        
        return response.data;

}

export const addTransaction = async (data) => {

 
        const response = await api.post('/Transactions',data)
        console.log("response from addTransaction API ", response);
        return response.data

}

export const deleteTransaction = async (id) =>{

 const response = await api.delete(`/Transactions/${id}`) 
 console.log("response from deleteTransaction API ", response);
 return response.data


}
export const updateTransaction = async (id , data) =>{

        const response  = await api.put(`/Transactions/${id}`,data)
        console.log("response from updateTransaction API ", response);
        return response.data
}
    
import axios from "axios";

const headers={
    "Content-Type": "application/json",
    Accept: "application/json",
}

export const apiCall=async(url,method,data)=>{
    axios.defaults.headers=headers;
    return await axios[method](url,data)
        .then(function(response){
            return response;
        })
        .catch(({ response }) => {
            console.log(response.data.message);
            
        });
}
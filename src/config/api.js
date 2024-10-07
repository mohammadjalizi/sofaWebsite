import axios from "axios";


const api= axios.create({

    // baseURL: get api,
    headers:{
    " Content-type":"application/json",


    }
})

export default api;
import axios from 'axios'

//function to get token
export function getToken(){
    return localStorage.getItem("token")
}

// baseURL + Token function 
export default function (){
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: getToken(),
        },
    })
}
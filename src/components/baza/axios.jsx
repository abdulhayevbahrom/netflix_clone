import axios from "axios";

const bazaUrl  = axios.create({
    baseURL :"https://api.themoviedb.org/3"
})

export default bazaUrl
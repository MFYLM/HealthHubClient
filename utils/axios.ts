import realAxios from "axios";

const axios = realAxios.create({
    withCredentials: true,
});

const IP = "169.234.75.96";                   // replace this with your local IP address
const LOCAL_HOST = `http://${IP}:8000`;


export { axios, LOCAL_HOST };
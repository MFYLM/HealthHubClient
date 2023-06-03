import realAxios from "axios";

const axios = realAxios.create({
    withCredentials: true,
});

const SERVER_IP = `144.126.210.142`;
const SERVER_HOST = `http://${SERVER_IP}:80`;


export { axios, SERVER_HOST };
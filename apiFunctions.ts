// define api functions here
import { axios } from "./utils/axios";
import { User1 } from "./utils/samples/sampleUsers";

const SERVER_IP = `144.126.210.142`;
const SERVER_HOST = `http://${SERVER_IP}:80`;

// NOTICE: put the IP of your device that runs server (need to update each time), and to allow backend on local network, you need to  
// run ```python3 manage.py runserver LOCAL_IP:8000``` instead of normal running
const LOCAL_IP = "169.234.121.2";               
const LOCAL_HOST = `http://${LOCAL_IP}:8000`;


export const testFetch = async () => {
    const headers = {
        'Content-Type': 'application/json',
        // 'session-id': User1.id
    };

    const data = {
        email: 'feiyang@uci.edu',
        password: 'feiyangpassword123'
    };

    const res = await axios.post(`${SERVER_HOST}/users/login`, data, { headers });
    
    return res.data
};


export const fetchRecommendations = async () => {
    const res = await axios.get(`${LOCAL_HOST}/users/recommendations/get`);

    console.log(res.data);
};
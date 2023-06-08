// define api functions here
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { User1 } from "./utils/samples/sampleUsers";



const SERVER_IP = `144.126.210.142`;
const SERVER_HOST = `http://${SERVER_IP}:80`;

// NOTICE: put the IP of your device that runs server (need to update each time), and to allow backend on local network, you need to  
// run ```python3 manage.py runserver LOCAL_IP:8000``` instead of normal running
const LOCAL_IP = "169.234.37.7";      
const LOCAL_HOST = `http://${LOCAL_IP}:8000`;


export const fetchExerciseInfo = (session: string) => async () => {
    const headers = {
        'Content-Type': 'application/json',
        'session-id': session,              // User1.session
    };

    const res = await axios.get(`${SERVER_HOST}/users/getplanscore`, { params:{'typeName': "exercise"}, headers });
    return res.data;
  };


export const fetchMealInfo = (session: string) => async () => {
    const headers = {
        'Content-Type': 'application/json',
        'session-id': session,              // User1.session
    };

    const res = await axios.get(`${SERVER_HOST}/users/getplanscore`, { params:{'typeName': "meal"}, headers });
    return res.data;
  };
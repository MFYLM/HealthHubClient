// define api functions here
import { axios } from "./utils/axios";
import { User1 } from "./utils/samples/sampleUsers";
import {
    FetchEventInput, 
    ExerciseRecommendation, 
    SleepRecommendation, 
    DietRecommendation, 
    UserLoginInput,
    UserSessionData,
    choosePlanParam,
    UserSettings,
    ExerciseOption,
    FetchPlanParam
} from "./apiInterfaces";

const SERVER_IP = `144.126.210.142`;
const SERVER_HOST = `http://${SERVER_IP}:80`;

// NOTICE: put the IP of your device that runs server (need to update each time), and to allow backend on local network, you need to  
// run ```python3 manage.py runserver LOCAL_IP:8000``` instead of normal running
const LOCAL_IP = "169.234.39.121";
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


export const loginUser = async (params: UserLoginInput) => {
    const { email, password } = params;

    const headers = {
        'Content-Type': 'application/json',
    };

    const data = {
        email: email,
        password: password
    };

    const res = await axios.post(`${SERVER_HOST}/users/login`, data, { headers });
    let result = res.data;

    let session: UserSessionData = { sessionId: "", userId: "" };

    if (result["status"]["success"] === true) {
        session.sessionId = result["sessionId"];
        session.userId = result["userId"];
    }
    
    return session;
};


export const logoutUser = (session: string) => async () => {
    const headers = {
        'Content-Type': 'application/json',
        'session-id': session
    };

    const res = await axios.get(`${SERVER_HOST}/users/logout`, { headers });

    // console.log("lout out: ", res.data);

};


export const fetchLifestyleScore = (session: string) => async () => {
    const headers = {
        'Content-Type': 'application/json',
        'session-id': session
    };

    const res = await axios.get(`${SERVER_HOST}/users/getlifescore`, { headers });

    let styleScore: number = -1;
    if (res.data["status"]["success"] === true) {
        styleScore = res.data["score"];
    }

    return styleScore;
};


export const fetchRecommendations = (session: string) => async () => {
    const headers = {
        'Content-Type': 'application/json',
        'session-id': session
    };

    const res = await axios.get(`${SERVER_HOST}/recommendations/get`, { headers });

    console.log(res.data);
    if (!res.data["status"]["success"])
        return [];
    
    let exercise: ExerciseRecommendation[] = res.data["exercise"];
    let sleep: SleepRecommendation[] = res.data["sleep"];
    let meal: DietRecommendation[] = res.data["meal"];

    return [exercise, sleep, meal];
};


export const choosePlan = (params: choosePlanParam) => async () => {
    const { session, planName, idealPlan, chosenPlan } = params;    

    const headers = {
        'Content-Type': 'application/json',
        'session-id': session
    };

    const data = {
        planName: planName,
        idealPlan: idealPlan,
        chosenPlan: chosenPlan
    };

    const res = await axios.post(`${SERVER_HOST}/recommendations/chooseplan`, data, { headers });

    // console.log(res.data);  
};


export const fetchPlanData = (params: FetchPlanParam) => async () => {
    const { type, session } = params;

    const headers = {
        'Content-Type': 'application/json',
        'session-id': session
    };

    const res = await axios.get(`${SERVER_HOST}/users/getplanscore`, { params: { "typeName": type }, headers });

    console.log("plan score: ", res.data);

    let result = {
        scoreDenominator: res.data["scoreDenominator"],
        scoreNumerator: res.data["scoreNumerator"]
    };

    return result;
};


export const fetchEventData = (params: FetchEventInput) => async () => {
    const { type, userId, eventCount, session } = params;

    const headers = {
        'Content-Type': 'application/json',
        'session-id': session
    };

    const data = {
        userUID: userId,
        typeName: type,
        eventCount: eventCount
    };

    const res = await axios.post(`${SERVER_HOST}/users/getlifescore`, data, { headers });

    return res.data["data"];
};


export const fetchUserSettings = (session: string) => async () => {
    const headers = {
        'Content-Type': 'application/json',
        'session-id': session
    };

    const res = await axios.get(`${SERVER_HOST}/users/settings/get`, { headers });

    const settings = res.data["settings"];

    let options: ExerciseOption[] = [];
    for (var i in settings["allowedExercises"]) {
        options.push({ name: i, trigger: settings["allowedExercises"][i] })
    }

    let result: UserSettings = { 
        email: res.data["data"]["email"],
        sex: settings["sex"],
        weight: settings["weight"],
        height: settings["height"],
        allowedExercises: options
    };

    return result;
};


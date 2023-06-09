// define data models here
// NOTE: All interfaces that follow with `Data` are retrieved from backend

interface Root {
    session: string;
};


// Users
export interface ExerciseOption {
    name: string;
    trigger: boolean;
};


export interface UserSettings {
    email: string,
    sex: string,
    weight: number,
    height: number,
    allowedExercises: ExerciseOption[]
};


export interface UserLoginInput {
    email: string;
    password: string;
};

export interface UserSessionData {
    sessionId: string;
    userId: string;
};

export interface UserSettingInput extends Root {
    settingName: string;
    data: any;
};

export interface UserSettingData {
    sex: string;
    weight: number;

};


// Events
export interface FetchEventInput extends Root {
    type: string;
    userId: string;
    eventCount: number;
};

export interface DataPoint {
    timestamp: number;
    value: number;
};

export interface FetchPlanParam extends Root {
    type: string;
};


// Recommendation
export interface ExerciseRecommendation {
    type: string;
    name: string;
    duration: number;      // in seconds / minutes?
};


export interface SleepRecommendation {
    type: string;
    name: string;
    duration: number;      // in seconds / minutes?
};


export interface DietRecommendation {
    type: string;
    name: string;
    calories: number;
};

export interface choosePlanParam extends Root {
    planName: string;
    idealPlan: DietRecommendation | SleepRecommendation | ExerciseRecommendation;
    chosenPlan: DietRecommendation | SleepRecommendation | ExerciseRecommendation;
}

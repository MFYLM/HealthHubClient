// define data models here
// NOTE: All interfaces that follow with `Data` are retrieved from backend
export interface FetchEventInput {
    type: string;
    userId: string;
    minTimeStamp: number;
    maxTimeStamp: number;
};


export interface EventData {

};


export interface UserSettingInput {
    settingName: string;
    data: any;
};


export interface UserSettingData {
    sex: string;
    weight: number;

};
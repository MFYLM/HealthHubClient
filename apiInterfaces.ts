// define data models here
// NOTE: All interfaces that follow with `Data` are retrieved from backend

interface Root {
    session: string;
};


// Users
export interface UserLoginInput extends Root {
    email: string;
    password: string;
};

export interface UserSettingInput extends Root {
    settingName: string;
    data: any;
};

export interface UserSettingData extends Root {
    sex: string;
    weight: number;

};


// Events
export interface FetchEventInput extends Root {
    type: string;
    userId: string;
    minTimeStamp: number;
    maxTimeStamp: number;
};

export interface DataPoint extends Root {
    timestamp: number;
    value: number;
};

export interface EventData extends Root {
    data: DataPoint[];
};



// Recommendation
export interface Recommendation extends Root {
    type: string;
    name: string;
    duration: number;      // in seconds / minutes?
};

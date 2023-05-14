const timeMap = new Map<number, string>();

timeMap.set(0, "Monday");
timeMap.set(1, "Tuesday");
timeMap.set(2, "Wednesday");
timeMap.set(3, "Thursday");
timeMap.set(4, "Friday");
timeMap.set(5, "Saturday");
timeMap.set(6, "Sunday");


export interface TimeString {
    day: string,
    localTime: string
};


export const timeToString = (timestamp: Date): TimeString => {

    return {
        day: timeMap.get(timestamp.getDay())!,
        localTime: timestamp.toLocaleTimeString()
    };
};
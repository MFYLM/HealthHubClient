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
    weekDay: string,
    hours: string,
    localTime: string
};


export const timeToString = (timestamp: Date): TimeString => {
    let time: string = "";
    if (timestamp.getHours() > 5  && timestamp.getHours() <= 12)
        time = "Morning";
    if (timestamp.getHours() > 12 && timestamp.getHours() <= 18)
        time = "Afternoon";
    if (timestamp.getHours() > 18 && timestamp.getHours() <= 22)
        time = "Evening";
    if (timestamp.getHours() > 22 || timestamp.getHours() <= 5)
        time = "Night";

    return {
        day: timestamp.toDateString(),
        weekDay: timeMap.get(timestamp.getDay())!,
        hours: time,
        localTime: timestamp.toLocaleTimeString()
    };
};
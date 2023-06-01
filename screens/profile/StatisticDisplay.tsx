import { useQuery } from "react-query";
import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";


interface AnalysisDisplayProps {
    charType: string,
    labels: string[],
    data: number[]
};


const AnalysisDisplay = (props: AnalysisDisplayProps) => {
    // TODO: pagnation of backend
    const { charType, labels, data } = props;


    return (
        <>
            {
                charType === "line" ?
                    <LineChart
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    data: data
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 4}
                        height={300}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 20,
                            marginHorizontal: 2
                        }}
                    />
                    :
                    <BarChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 4}
                        height={300}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 20,
                            marginHorizontal: 2
                        }}
                    />
            }
        </>
    );
};


export default AnalysisDisplay;
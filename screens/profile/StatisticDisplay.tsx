import { useQuery } from "react-query";
import { VictoryChart, VictoryBar, VictoryLine, VictoryLegend } from "victory-native";
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
        <VictoryChart>
            {
                charType === "line" ?
                    <VictoryBar
                        data={[
                            { x: "cat", y: 10 },
                            { x: "dog", y: 25 },
                            { x: "bird", y: 40 },
                            { x: "frog", y: 50 },
                            { x: "fish", y: 50 }
                        ]}
                    />
                    :
                    <VictoryBar
                        data={[
                            { x: "cat", y: 10 },
                            { x: "dog", y: 25 },
                            { x: "bird", y: 40 },
                            { x: "frog", y: 50 },
                            { x: "fish", y: 50 }
                        ]}
                    />
            }
        </VictoryChart>
    );
};


export default AnalysisDisplay;
import { useQuery } from "react-query";
import { VictoryChart, VictoryBar, VictoryLine, VictoryLegend, VictoryTheme } from "victory-native";
import { Dimensions } from "react-native";
import { processData } from "../../utils/helpers/time";


interface AnalysisDisplayProps {
    charType: string,
    labels: string[],
    values: number[]
};


const AnalysisDisplay = (props: AnalysisDisplayProps) => {
    // TODO: pagnation of backend
    const { charType, labels, values } = props;
    const data = processData(labels, values);
    

    return (
        <VictoryChart
            theme={VictoryTheme.grayscale}
            domainPadding={{ x: 30 }}
        >
            {
                charType === "bar" ?
                    <VictoryBar
                        data={data}
                    />
                    :
                    <VictoryLine
                        data={data}
                    />
            }
        </VictoryChart>
    );
};


export default AnalysisDisplay;
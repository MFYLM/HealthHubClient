export const processData = (labels: string[], values: number[]) => {
    const data = [];
    for (let i = 0; i < labels.length; ++i) {
        data.push({ x: labels[i], y: values[i] });
    }

    return data;
};
import { useEffect } from "react";
import { User } from "../interfaces/user";
import Chart from 'react-google-charts'

interface CompletionProps {
    user: User;
    sureness: number[];
    willingness: number[]
}

const scatterOptions = {
    title: 'Willingness vs. AI Rating',
    hAxis: { title: 'AI Rating', minValue: 0, maxValue: 11 },
    vAxis: { title: 'Willingness', minValue: 0, maxValue: 11 },
    legend: 'none',
}

const Completion = ({ user, sureness, willingness }: CompletionProps) => {

    const completeTrials = async () => {
        const request = await fetch(`${process.env.REACT_APP_API_URL}/saveTrial`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user,
                sureness,
                willingness
            }),
        });
    }

    let scatterData:number[][] = [];

    useEffect(() => {
        for (let i = 0; i < sureness.length; i++){
            scatterData.push([sureness[i], willingness[i]]);
        }
        console.log(scatterData);
        console.log(sureness);
        console.log(willingness);
        completeTrials();
    }, []);

    return (
        <div>
            <h1>Thank you for completing the experiment!</h1>
            <p>There were XX path-proven cancers in this set,
                you rated them A, B, C (there will only be a small number of these)
            </p>
            <p>
                Here is a scatterplot of your willingness to triage an image as a function of its AI rating:
            </p>
            <div>
                <Chart
                    width={'700px'}
                    height={'420px'}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={scatterData}
                    options={scatterOptions}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        </div>
    )
}

export default Completion;
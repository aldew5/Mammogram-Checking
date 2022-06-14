import { useEffect } from "react";
import { User } from "../interfaces/user";
import Chart from 'react-google-charts';
import { CSVLink } from "react-csv";


interface CompletionProps {
    user: User;
    sureness: number[];
    willingness: number[];
    images: any[][];
}

const scatterOptions = {
    title: 'Willingness vs. AI Rating',
    hAxis: { title: 'AI Rating', minValue: 0, maxValue: 11 },
    vAxis: { title: 'Willingness', minValue: 0, maxValue: 11 },
    legend: 'none',
}

const Completion = ({ user, sureness, willingness, images }: CompletionProps) => {

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
            })
        });
    }

    function prepareData(user: User, sureness: number[],
        willingness: number[], images: any[][]): string[][] {

        let data: string[][] = [["ID", "Age", "Gender", "Location", "Specialty", "Mammo Number",
            "Screening Number", "Years", "Setting", "Program", "Models", "Email", "Case", 
            "Willingness", "Sureness"]]

        let image_cnt: number = 0;

        for (let i = 0; i < sureness.length; i++) {
            data.push([user.id, user.age, user.gender, user.location, user.specialty, user.mammo_number,
            user.screening_number, user.years, user.setting, user.program, user.models, user.email,
            images[image_cnt][1], String(sureness[i]), String(willingness[i])]);

            image_cnt += 2;
        }
        return data;
    }

    let scatterData: any[][] = [['AI Rating', 'Willingness']];

    useEffect(() => {
        for (let i = 0; i < sureness.length; i++) {
            scatterData.push([sureness[i], willingness[i]]);
        }
        completeTrials();
    }, []);

    return (
        <div style={{ paddingTop: "50px", backgroundColor: "#535974", height: "740px" }}>
            <div style={{
                backgroundColor: "white", width: "1000px", marginLeft: "220px",
                paddingTop: "30px", paddingBottom: "50px", borderStyle: "solid", borderRadius: "8px"
            }}>
                <div>
                    <h1>Thank you for completing the experiment!</h1>
                    <p>There were XX path-proven cancers in this set,
                        you rated them A, B, C...
                    </p>
                    <p>
                        Here is a scatterplot of your willingness to triage an image as a function of its AI rating:
                    </p>
                </div>
                <div style={{ paddingLeft: "150px" }}>
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
            <CSVLink 
                data={prepareData(user, sureness, willingness, images)}
                filename={`${user.id}.csv`}>
                Export to CSV
            </CSVLink>
        </div>
    )
}

export default Completion;
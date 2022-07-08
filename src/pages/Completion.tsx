import { useEffect } from "react";
import { User } from "../interfaces/user";
import Chart from 'react-google-charts';
import { CSVLink } from "react-csv";
import styles from "../styles/Completion.module.css";

interface CompletionProps {
    user: User;
    sureness: number[];
    willingness: number[];
    images: any[][];
    ratings: number[];
    num_cancers: number;
    cancerScores: number[];
}

const scatterOptions = {
    title: 'Willingness vs. AI Rating',
    hAxis: { title: 'AI Rating', minValue: 0, maxValue: 11 },
    vAxis: { title: 'Willingness', minValue: 0, maxValue: 11 },
    legend: 'none',
}
const secondScatterOptions = {
    title: 'Willingness vs. Reader\'s Rating',
    hAxis: { title: 'Reader\s Rating', minValue: 0, maxValue: 11 },
    vAxis: { title: 'Willingness', minValue: 0, maxValue: 11 },
    legend: 'none',
}

const Completion = ({ user, sureness, willingness, images, ratings,
    num_cancers, cancerScores }: CompletionProps) => {

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
        willingness: number[], images: any[][], ratings: number[]): string[][] {

        let data: string[][] = [["ID", "Age", "Gender", "Location", "Specialty", "Mammo Number",
            "Screening Number", "Years", "Setting", "Program", "Models", "Email", "Case", "AI Rating",
            "Willingness", "Sureness"]]

        let image_cnt: number = 0;

        for (let i = 0; i < sureness.length; i++) {
            data.push([user.id, user.age, user.gender, user.location, user.specialty, user.mammo_number,
            user.screening_number, user.years, user.setting, user.program, user.models, user.email,
            images[image_cnt][1], String(ratings[i]), String(sureness[i]), String(willingness[i])]);

            image_cnt += 2;
        }
        return data;
    }

    let firstScatterData: any[][] = [['AI Rating', 'Willingness']];
    let secondScatterData: any[][] = [["Willingness", "Reader's Rating"]]

    useEffect(() => {
        for (let i = 0; i < ratings.length; i++) {
            firstScatterData.push([ratings[i], willingness[i]]);
        }
        for (let i = 0; i < willingness.length; i++) {
            secondScatterData.push([willingness[i], sureness[i]]);
        }
        completeTrials();
    }, []);

    return (
        <div style={{ paddingTop: "50px", margin: "auto" }}>
            <div className={styles.text}>
                <div>
                    <h1>Thank you for completing the experiment!</h1>
                    <p>There were {num_cancers} path-proven cancers in this set,
                        you rated them {cancerScores[0]}, {cancerScores[1]}.
                    </p>
                    <p>
                        The following charts show your willingness to triage an image as a function <br/>
                        of its AI rating and your willingness to triage as a function of your own
                        rating:
                    </p>
                </div>
                <div style={{ display: "table", paddingLeft: "30px" }}>
                    <div style={{ display: "table-row" }}>
                        <div style={{ display: "table-cell" }}>
                            <Chart
                                width={'550px'}
                                height={'420px'}
                                chartType="ScatterChart"
                                loader={<div>Loading Chart</div>}
                                data={firstScatterData}
                                options={scatterOptions}
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                        <div style={{ display: "table-cell" }}>
                            <Chart
                                width={'550px'}
                                height={'420px'}
                                chartType="ScatterChart"
                                loader={<div>Loading Chart</div>}
                                data={secondScatterData}
                                options={secondScatterOptions}
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CSVLink
                data={prepareData(user, sureness, willingness, images, ratings)}
                filename={`${user.id}.csv`}>
                Export to CSV
            </CSVLink>
        </div>
    )
}

export default Completion;
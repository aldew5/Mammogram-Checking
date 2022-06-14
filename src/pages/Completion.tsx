import { useEffect } from "react";
import { User } from "../interfaces/user";
import Chart from 'react-google-charts'

interface CompletionProps {
    user: User;
    sureness: number[];
    willingness: number[];
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
            })
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link: any = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `file.json`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            });
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
        </div>
    )
}

export default Completion;
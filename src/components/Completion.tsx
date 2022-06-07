import { useEffect, useState } from "react";
import { User } from "../interfaces/user";

interface CompletionProps {
    user: User;
    sureness: number[];
    willingness: number[]
}

const Completion = ({ user, sureness, willingness }: CompletionProps) => {

    const [complete, setComplete] = useState<boolean>(false);

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

    useEffect(() => {
        if (!complete){
            completeTrials();
            setComplete(true);
        }
    }, []);

    return (
        <div>
            <h1>Thank you for completing the experiment!</h1>
        </div>
    )
}

export default Completion;
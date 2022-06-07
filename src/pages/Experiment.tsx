import Image from "../components/Image";
import Cat from "../assets/cat.jpeg";
import Dog from "../assets/dog.jpeg";
import Selection from "../components/Selection";
import Completion from "../components/Completion";
import { useState, useEffect } from "react";
import { User } from "../interfaces/user";

interface ExperimentProps {
    user: User;
}

const Experiment = ({ user }: ExperimentProps) => {

    const [displayImage, setDisplayImage] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [surenessList, setSurenessList] = useState<number[]>([]);
    const [willingnessList, setWillingnessList] = useState<number[]>([]);

    const images: any = [Cat, Dog];

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayImage(false);
        }, 5000);
        return () => clearTimeout(timer);
    })

    return (
        <div style={{ marginTop: "100px" }}>
            {(index <= images.length) ?
                <div>
                    {(displayImage) ?
                        <Image
                            index={index}
                            setIndex={setIndex}
                            images={images}
                        />
                        :
                        <Selection
                            setDisplayImage={setDisplayImage}
                            willingnessList={willingnessList}
                            setWillingnessList={setWillingnessList}
                            surenessList={surenessList}
                            setSurenessList={setSurenessList}
                        />
                    }
                </div>
                :
                <Completion
                    user={user}
                    sureness={surenessList}
                    willingness={willingnessList}
                />
            }
        </div>
    )
}

export default Experiment;
import Image from "../components/Image";
import Selection from "../components/Selection";
import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import images from "../util/images";

interface ExperimentProps {
    willingnessList: number[];
    surenessList: number[];
    setSurenessList: Dispatch<SetStateAction<number[]>>;
    setWillingnessList: Dispatch<SetStateAction<number[]>>;
}

const Experiment = ({ willingnessList, surenessList,
    setSurenessList, setWillingnessList }: ExperimentProps) => {

    const [displayImage, setDisplayImage] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [willingness, setWillingness] = useState<number>(5);
    const [sureness, setSureness] = useState<number>(4);

    useEffect(() => {
        if (displayImage) {
            console.log("call", surenessList, willingnessList);
            const timer = setTimeout(() => {
                setDisplayImage(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [displayImage])

    return (
        <div style={{ marginTop: "100px" }}>
            <div>
                {(displayImage) ?
                    <Image
                        index={index}
                        setIndex={setIndex}
                        images={images}
                        sureness={sureness}
                        setSureness={setSureness}
                    />
                    :
                    <Selection
                        setDisplayImage={setDisplayImage}
                        willingnessList={willingnessList}
                        setWillingnessList={setWillingnessList}
                        surenessList={surenessList}
                        setSurenessList={setSurenessList}
                        index={index}
                        length={images.length}
                        willingness={willingness}
                        setWillingness={setWillingness}
                        sureness={sureness}
                        setSureness={setSureness}
                    />
                }
            </div>
        </div>
    )
}

export default Experiment;
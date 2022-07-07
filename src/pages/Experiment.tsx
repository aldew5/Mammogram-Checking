import Mammogram from "../components/Mammogram";
import Selection from "../components/Selection";
import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "../styles/Experiment.module.css";

interface ExperimentProps {
    willingnessList: number[];
    surenessList: number[];
    images: any[][];
    ratings: number[];
    cancerScores: number[];
    setRatings: Dispatch<SetStateAction<number[]>>;
    setSurenessList: Dispatch<SetStateAction<number[]>>;
    setWillingnessList: Dispatch<SetStateAction<number[]>>;
    setCancerScores: Dispatch<SetStateAction<number[]>>;
}

const Experiment = ({ willingnessList, surenessList, images, ratings,
    cancerScores, setCancerScores, setSurenessList, setWillingnessList,
    setRatings }: ExperimentProps) => {

    const [displayImage, setDisplayImage] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [willingness, setWillingness] = useState<number>(5);
    const [sureness, setSureness] = useState<number>(4);
    const [imageIndex, setImageIndex] = useState<number>(0);

    useEffect(() => {
        if (displayImage) {
            const timer = setTimeout(() => {
                setDisplayImage(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [displayImage]);

    return (
        <div className={styles.container}>
            <div>
                {(displayImage) ?
                    <div className={styles.image}>
                        <Mammogram
                            index={index}
                            setIndex={setIndex}
                            images={images}
                            sureness={sureness}
                            setSureness={setSureness}
                            imageIndex={imageIndex}
                            setImageIndex={setImageIndex}
                            setRatings={setRatings}
                            ratings={ratings}
                        />
                    </div>
                    :
                    <div>
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
                            imageIndex={imageIndex}
                            images={images}
                            setCancerScores={setCancerScores}
                            cancerScores={cancerScores}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Experiment;
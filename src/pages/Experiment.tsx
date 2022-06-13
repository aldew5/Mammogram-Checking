import Mammogram from "../components/Mammogram";
import Selection from "../components/Selection";
import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import images from "../util/images";
import styles from "../styles/Experiment.module.css";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

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
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const cacheImages = async (array: any[]) => {
        const promises = await array.map((src) => {
            return new Promise<void>(function (resolve, reject) {
                const img = new Image();

                img.src = src;
                img.onload = function () {
                    resolve();
                 }
                img.onerror = function () {
                    reject();
                }

            });
        });

        await Promise.all(promises);
        setIsLoading(false);
    }

    useEffect(() => {
        cacheImages(images);
    }, [])

    useEffect(() => {
        if (displayImage && !isLoading) {
            const timer = setTimeout(() => {
                setDisplayImage(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [displayImage, isLoading])

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
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Experiment;
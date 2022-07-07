import {
    Dispatch,
    SetStateAction,
    useState
} from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import styles from "../styles/Selection.module.css";
import EscapeCard from "./EscapeCard";
import scores from "../util/scores";


interface SelectionProps {
    setDisplayImage: Dispatch<SetStateAction<boolean>>;
    setSurenessList: Dispatch<SetStateAction<number[]>>;
    setWillingnessList: Dispatch<SetStateAction<number[]>>;
    setSureness: Dispatch<SetStateAction<number>>;
    setWillingness: Dispatch<SetStateAction<number>>;
    setCancerScores: Dispatch<SetStateAction<number[]>>;
    sureness: number;
    willingness: number;
    willingnessList: number[];
    surenessList: number[];
    index: number;
    length: number;
    images: any[];
    imageIndex: number;
    cancerScores: number[];
}

interface Mark {
    value: number;
    label: string;
}

const Selection = ({ setDisplayImage, setSurenessList, setWillingnessList,
    willingnessList, surenessList, index, length, willingness, setWillingness,
    sureness, setSureness, imageIndex, images, cancerScores, setCancerScores }: SelectionProps) => {

    const navigate = useNavigate();
    const [displayWilling, setDisplayWilling] = useState<boolean>(true);
    const [clicked, setClicked] = useState<boolean>(false);

    function valueText(value: number) {
        return `${value}`
    }

    const handleClear = () => {
        if (!clicked) {
            setClicked(true);
        } else {
            navigate("/completion");
        }
    }

    const handleChange1 = (event: Event, new_value: number | number[]) => {
        if (Array.isArray(new_value)) {
            return;
        }

        if (new_value !== sureness) {
            setSureness(new_value);
        }
    }

    const handleChange2 = (event: Event, new_value: number | number[]) => {
        if (Array.isArray(new_value)) {
            return;
        }

        if (new_value !== willingness) {
            setWillingness(new_value);
        }
    }

    const handleClick1 = () => {
        let sure: number[] = surenessList;
        sure.push(sureness);
        setSurenessList(sure);

        setDisplayWilling(false);
    }

    const handleClick2 = () => {
        setDisplayImage(true);

        let willing: number[] = willingnessList;
        willing.push(willingness);
        setWillingnessList(willing);

        if (images[imageIndex][2] === 1) {
            let cancers: number[] = cancerScores;
            cancers.push(sureness);
            setCancerScores(cancers);
        }

        if (index >= length) {
            navigate("/completion");
        }

    }

    const labelling_marks: Mark[] = [
        { value: 1, label: 'Completely normal' },
        { value: 10, label: "Clearly to be recalled" }
    ];
    const willing_marks: Mark[] = [
        { value: 1, label: "Yes, let the computer triage this image" },
        { value: 10, label: "No, a human must look at this case" }
    ];

    return (
        <div>
            {(clicked) ?
                <div style={{ position: "absolute" }}>
                    <EscapeCard setClicked={setClicked} />
                </div>
                :
                <div className={styles.selection}>
                    {(!clicked) ?
                        <div className={styles.clear}>
                            <ClearIcon onClick={handleClear} />
                        </div> : <></>
                    }
                    <div style={{
                        marginBottom: "2rem", marginLeft: "150px",
                        paddingTop: "2rem", marginRight: "150px"
                    }}>
                        <div style={{ width: "100%" }}>
                            {(displayWilling) ?
                                <div>
                                    <div style={{ marginBottom: "2rem" }}>
                                        <h3>How sure are you that these images are from the normal case?</h3>
                                    </div>
                                    <Box>
                                        <Slider
                                            aria-label="Labelling"
                                            key={`slider-${sureness}`}
                                            defaultValue={sureness}
                                            getAriaValueText={valueText}
                                            valueLabelDisplay="auto"
                                            step={1}
                                            min={1}
                                            max={10}
                                            marks={labelling_marks}
                                            onChange={handleChange1}
                                        />
                                    </Box>
                                    <Button variant="contained" onClick={handleClick1}>
                                        Confirm
                                    </Button>
                                </div>
                                :
                                <div>
                                    <div style={{ marginBottom: "2rem" }}>
                                        <h3>The computer has rated these images {scores[images[imageIndex][1]]} out of 10 (10: highest probabilty that
                                            there is cancer present). How willing would you be to let the computer make
                                            the decision about this case alone without having you look at it?
                                        </h3>
                                    </div>
                                    <Box>
                                        <Slider
                                            aria-label="Willing"
                                            defaultValue={4}
                                            getAriaValueText={valueText}
                                            valueLabelDisplay="auto"
                                            step={1}
                                            min={1}
                                            max={10}
                                            marks={willing_marks}
                                            onChange={handleChange2}
                                        />
                                    </Box>
                                    <Button variant="contained" onClick={handleClick2}>
                                        Confirm
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Selection;
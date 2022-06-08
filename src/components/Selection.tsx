import {
    Dispatch,
    SetStateAction,
    useState
} from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


interface SelectionProps {
    setDisplayImage: Dispatch<SetStateAction<boolean>>;
    setSurenessList: Dispatch<SetStateAction<number[]>>;
    setWillingnessList: Dispatch<SetStateAction<number[]>>;
    willingnessList: number[];
    surenessList: number[];
    index: number;
    length: number;
}

interface Mark {
    value: number;
    label: string;
}

const Selection = ({ setDisplayImage, setSurenessList, setWillingnessList,
    willingnessList, surenessList, index, length }: SelectionProps) => {

    const [willingness, setWillingness] = useState<number>(5);
    const [sureness, setSureness] = useState<number>(4);

    const navigate = useNavigate();

    function valueText(value: number) {
        return `${value}`
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

    const handleClick = () => {
        setDisplayImage(true);

        let willing: number[] = willingnessList;
        willing.push(willingness);
        setWillingnessList(willing);

        let sure: number[] = surenessList;
        sure.push(sureness);
        setSurenessList(sure);

        if (index >= length) {
            navigate("/completion");
        }
    }

    const labelling_marks: Mark[] = [
        { value: 1, label: 'Completely sure' },
        { value: 10, label: "Not sure at all" }
    ];
    const willing_marks: Mark[] = [
        { value: 1, label: "Completely willing" },
        { value: 10, label: "Not willing at all" }
    ];

    return (
        <div style={{ width: "700px", marginLeft: "350px" }}>
            <div style={{ marginBottom: "2rem" }}>
                <div style={{ marginBottom: "8rem" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h3>How sure are you that these images are from the normal case?</h3>
                    </div>
                    <Box>
                        <Slider
                            aria-label="Labelling"
                            defaultValue={5}
                            getAriaValueText={valueText}
                            valueLabelDisplay="auto"
                            step={1}
                            min={1}
                            max={10}
                            marks={labelling_marks}
                            onChange={handleChange1}
                        />
                    </Box>
                </div>
                <div>
                    <div style={{ marginBottom: "2rem" }}>
                        <h3>The computer has rated these images X out of 10 (10: highest probabilty that
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
                </div>
            </div>
            <Button variant="contained" onClick={handleClick}>
                Confirm
            </Button>
        </div>
    )
}

export default Selection;
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


interface ImageProps {
    index: number;
    images: any[];
    sureness: number;
    setIndex: Dispatch<SetStateAction<number>>;
    setSureness: Dispatch<SetStateAction<number>>;
}
interface Mark {
    value: number;
    label: string;
}

let image_index: number;

const Mammogram = ({ index, images, sureness, setSureness, setIndex }: ImageProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const labelling_marks: Mark[] = [
        { value: 1, label: 'Completely normal' },
        { value: 10, label: "Clearly to be recalled" }
    ];

    function valueText(value: number) {
        return `${value}`
    }

    const handleChange = (event: Event, new_value: number | number[]) => {
        if (Array.isArray(new_value)) {
            return;
        }

        if (new_value !== sureness) {
            setSureness(new_value);
        }
    }

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        image_index = index;
        setIndex(index + 2);
    }, []);

    return (
        <div>
            {(isLoading) ? <div></div> :
                <div>
                    <div style={{ overflow: "hidden" }}>
                        <div style={{ width: "500px", float: "left" }}>
                            <img src={images[image_index][0]} alt="not found" height="500px" />
                        </div>
                        <div>
                            <img src={images[image_index + 1][0]} alt="not found" height="500px" />
                        </div>
                    </div>
                    <div style={{ width: "700px", marginLeft: "150px" }}>
                        <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
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
                                onChange={handleChange}
                            />
                        </Box>
                    </div>
                </div>
            }
        </div>
    )
}

export default Mammogram;
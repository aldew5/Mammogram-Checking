import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState
}
    from "react";
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

const Image = ({ index, images, sureness, setSureness, setIndex }: ImageProps) => {

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
        image_index = index;
        setIndex(index + 2);
    }, []);

    return (
        <div>
            <div style={{ width: "1400px", overflow: "hidden" }}>
                <div style={{ width: "500px", float: "left", marginLeft: "250px" }}>
                    <img src={images[image_index]} alt="not found" width="400px" />
                </div>
                <div style={{ marginRight: "250px" }}>
                    <img src={images[image_index + 1]} alt="not found" width="400px" />
                </div>
            </div>
            <div style={{ width: "700px", marginLeft: "350px" }}>
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
    )
}

export default Image;
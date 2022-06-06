import Image from "../components/Image";
import Selection from "../components/Selection";
import { useState, useEffect } from "react";

const Experiment = () => {

    const [displayImage, setDisplayImage] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayImage(false);
        }, 5000);
        return () => clearTimeout(timer);
    })

    return (
        <div style={{ marginTop: "100px" }}>
            {(displayImage) ?
                <Image />
                :
                <Selection 
                    setDisplayImage={setDisplayImage}
                />
            }
        </div>
    )

}

export default Experiment;
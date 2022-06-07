import Image from "../components/Image";
import Cat from "../assets/cat.jpeg";
import Dog from "../assets/dog.jpeg";
import Selection from "../components/Selection";
import Completion from "../components/Completion";
import { useState, useEffect } from "react";

const Experiment = () => {

    const [displayImage, setDisplayImage] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);

    const images: any = [Cat, Dog];

    useEffect(() => {
        console.log(index);
        const timer = setTimeout(() => {
            setDisplayImage(false);
        }, 5000);
        return () => clearTimeout(timer);
    })

    return (
        <div style={{ marginTop: "100px" }}>
            {(index < images.length && !displayImage) ?
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
                        />
                    }
                </div> : <Completion />
            }
        </div>
    )

}

export default Experiment;
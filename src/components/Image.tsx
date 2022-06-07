import {
    Dispatch,
    SetStateAction,
    useEffect
}
    from "react";

interface ImageProps {
    index: number;
    images: any[];
    setIndex: Dispatch<SetStateAction<number>>;
}

let image_index: number;

const Image = ({ index, images, setIndex }: ImageProps) => {

    useEffect(() => {
        image_index = index;
        setIndex(index + 1);
    }, []);

    return (
        <div>
            <img src={images[image_index]} alt="not found" width="500px" />
        </div>
    )
}

export default Image;
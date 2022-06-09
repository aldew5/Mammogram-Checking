import Image from "../components/Image";
import Cat from "../assets/cat.jpeg";
import Dog from "../assets/dog.jpeg";
import Selection from "../components/Selection";
import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import {
    Normal1,
    Normal2,
    Normal3,
    Normal4,
    Normal5,
    Normal6,
    Normal7,
    Normal8,
    Normal9,
    Normal10,
    Normal11,
    Normal12,
    Normal13,
    Normal14,
    Normal15,
    Normal16,
    Normal17,
    Normal18,
    Normal19,
    Normal20,
    Normal21,
    Normal22,
    Normal23,
    Normal24,
    Normal25,
    Normal26,
    Normal27,
    Normal28,
    Normal29,
    Normal30,
    Normal31,
    Normal32,
    Normal33,
    Normal34,
    Normal35,
    Normal36,
    Normal37,
    Normal38,
    Normal39,
    Normal40,
    Normal41,
    Normal42,
    Normal43,
    Normal44,
    Normal45,
    Normal46,
    Normal47,
    Normal48,
    Normal49,
    Normal50,
    Normal51,
    Normal52,
    Normal53,
    Normal54,
    Normal55,
    Normal56,
    Normal57,
    Normal58,
    Normal59,
    Normal60,
    Normal61,
    Normal62,
    Normal63,
    Normal64,
    Normal65,
    Normal66,
    Normal67,
    Normal68,
    Normal69,
    Normal70,
    Normal71,
    Normal72,
    Normal73,
    Normal74,
    Normal75,
    Normal76,
    Normal77,
    Normal78,
    Normal79,
    Normal80,
    Normal81,
    Normal82,
    Normal83,
    Normal84,
    Normal85,
    Normal86,
    Normal87,
    Normal88,
    Normal89,
    Normal90,
    Normal91,
    Normal92,
    Normal93,
    Normal94,
    Normal95,
    Normal96,
    Normal97,
    Normal98,
    Normal99,
    Normal100,
    Normal101,
    Normal102,
    Normal103,
    Normal104,
    Normal105,
    Normal106,
    Normal107,
    Normal108,
    Normal109,
    Normal110,
    Normal111,
    Normal112,
    Normal113,
    Normal114,
    Normal115,
    Normal116,
    Normal117,
    Normal118,
    Normal119,
    Normal120,
    Normal121,
    Normal122,
    Normal123,
    Normal124,
    Normal125,
    Normal126,
    Normal127,
    Normal128,
    Normal129,
    Normal130,
    Normal131,
    Normal132,
    Normal133,
    Normal134,
    Normal135,
    Normal136,
    Normal137,
    Normal138,
    Normal139,
    Normal140,
    Normal141,
    Normal142,
    Normal143,
    Normal144,
    Normal145,
    Normal146,
    Normal147,
    Normal148,
    Normal149,
    Normal150,
    Normal151,
    Normal152,
    Normal153,
    Normal154,
    Normal155,
    Normal156,
    Normal157,
    Normal158,
    Normal159,
    Normal160,
    Normal161,
    Normal162,
    Normal163,
    Normal164,
    Normal165,
    Normal166,
    Normal167,
    Normal168,
    Normal169,
    Normal170,
    Normal171,
    Normal172,
    Normal173,
    Normal174,
    Normal175,
    Normal176,
    Normal177,
    Normal178,
    Normal179,
    Normal180,
    Normal181,
    Normal182,
    Normal183,
    Normal184,
    Normal185,
    Normal186,
    Normal187,
    Normal188,
    Normal189,
    Normal190
} from "../assets";

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

    const images: any = [Normal1, Normal2, Normal3, Normal4, Normal5, Normal6, Normal7, Normal8,
        Normal9, Normal10, Normal11, Normal12, Normal13, Normal14, Normal15, Normal16, Normal17, Normal18,
        Normal19, Normal20, Normal21, Normal22, Normal23, Normal24, Normal25, Normal26, Normal27, Normal28,
        Normal29, Normal30, Normal31, Normal32, Normal33, Normal34, Normal35, Normal36, Normal37, Normal38,
        Normal39, Normal40, Normal41, Normal42, Normal43, Normal44, Normal45, Normal46, Normal47, Normal48,
        Normal49, Normal50, Normal51, Normal52, Normal53, Normal54, Normal55, Normal56, Normal57, Normal58,
        Normal59, Normal60, Normal61, Normal62, Normal63, Normal64, Normal65, Normal66, Normal67, Normal68,
        Normal69, Normal70, Normal71, Normal72, Normal73, Normal74, Normal75, Normal76, Normal77, Normal78,
        Normal79, Normal80, Normal81, Normal82, Normal83, Normal84, Normal85, Normal86, Normal87, Normal88,
        Normal89, Normal90, Normal91, Normal92, Normal93, Normal94, Normal95, Normal96, Normal97, Normal98,
        Normal99, Normal100, Normal101, Normal102, Normal103, Normal104, Normal105, Normal106, Normal107,
        Normal108, Normal109, Normal110, Normal111, Normal112, Normal113, Normal114, Normal115, Normal116,
        Normal117, Normal118, Normal119, Normal120, Normal121, Normal122, Normal123, Normal124, Normal125,
        Normal126, Normal127, Normal128, Normal129, Normal130, Normal131, Normal132, Normal133, Normal134,
        Normal135, Normal136, Normal137, Normal138, Normal139, Normal140, Normal141, Normal142, Normal143,
        Normal144, Normal145, Normal146, Normal147, Normal148, Normal149, Normal150, Normal151, Normal152,
        Normal153, Normal154, Normal155, Normal156, Normal157, Normal158, Normal159, Normal160, Normal161,
        Normal162, Normal163, Normal164, Normal165, Normal166, Normal167, Normal168, Normal169, Normal170,
        Normal171, Normal172, Normal173, Normal174, Normal175, Normal176, Normal177, Normal178, Normal179,
        Normal180, Normal181, Normal182, Normal183, Normal184, Normal185, Normal186, Normal187, Normal188,
        Normal189, Normal190];

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayImage(false);
        }, 5000);
        return () => clearTimeout(timer);
    })

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
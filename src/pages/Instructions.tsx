import Button from "@mui/material/Button";
import { Normal1 } from "../assets";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Instructions.module.css";

const Instructions = () => {

    const navigate = useNavigate();

    return (
        <div style={{backgroundColor: "#535974", height: "790px", borderStyle: "solid", alignContent:'center', borderWidth:"0.1px"}}>
            <div style={{marginLeft:"65px", backgroundColor: "white", marginTop: "30px", borderStyle: "solid", width: "1300px"}}>
                <p className={styles.title}>Instructions:</p>
                <p className={styles.text}>
                    It has been suggested that Artificial Intelligence (AI) software could be used to triage / filter
                    cases in cancer screening (e.g. mammography). The AI would decide that some cases were so obviously normal
                    that they did not need to be reviewed by a human reader and, perhaps, that some cases were so obviously abnormal
                    that the patient would certainly be recalled and, again, the case would not need to be reviewed by a human reader.
                </p>
                <p className={styles.text}>
                    In this experiment, we will ask you about whether specific cases would be reasonable candidates for triage. We are interested
                    in your initial reactions, rather than a detailed analysis of each case. Accordingly, we are only showing you each
                    case for 5 seconds. We are seeking to coarsely simulate the first appearance of the case, when you might have a reaction
                    like “This is obviously normal” or “This one is going to take some work.”
                </p>
                <p className={styles.text}>
                    There is no ‘trick’ here. We are showing you a
                    set of bilateral MLO images, roughly as they might appear in a screening setting. Each image will be presented for 5 seconds.
                    You will be asked to rank each image on a 10 point scale from apparently completely normal (1) to clearly to be recalled (10).
                    Next, you will then be shown the computer's rating of the same image on the same scale. Given this information you will be asked
                    to rate your willingness to allow the computer to make a decision about the case without the aid of a radiologist. Again, there will
                    be a 10-point scale from “Yes, let the computer triage this image” (1) to “No, a human must look at this case” (10).
                </p>
                <p className={styles.text}>A sample trial image is shown below:</p>
                <div style={{ margin: "auto" }}>
                    <img src={Normal1} alt="not found" width="250px" />
                </div>
                <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Button
                        variant="contained"
                        onClick={() => { navigate("/experiment") }}
                        style={{ backgroundColor: "#28243c" }}>
                        Begin experiment
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Instructions
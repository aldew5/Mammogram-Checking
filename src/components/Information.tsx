import File1 from '../assets/Consent_Fact_Sheet/001.png';
import File2 from '../assets/Consent_Fact_Sheet/002.png';
import File3 from '../assets/Consent_Fact_Sheet/003.png';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import styles from "../styles/Information.module.css";
import Alert from '@mui/material/Alert';
import { Dispatch, SetStateAction, useState } from "react";

interface InformationProps {
    setChecked: Dispatch<SetStateAction<boolean>>;
    setShowInformation: Dispatch<SetStateAction<boolean>>;
    checked: boolean;
}

const Information = ({ checked, setChecked, setShowInformation }: InformationProps) => {

    const [showWarning, setShowWarning] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    const handleClick = () => {
        if (checked) {
            setShowInformation(false);
        } else {
            setShowWarning(true);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.terms}>
                <img src={File1} alt="not found" width="1000" />
                <img src={File2} alt="not found" width="1000" />
                <img src={File3} alt="not found" width="1000" />
            </div><br />
            <div style={{ width: "100%", overflow: "hidden", marginBottom: "2rem" }}>
                <div style={{ textAlign: "left", marginLeft: "70px", float: "left", width: "700px" }}>
                    <p><b>I have read the Research Study Information Sheet and I agree to participate in this study</b></p>
                </div>
                <div style={{ marginRight: "150px", marginTop: "4px" }}>
                    <Checkbox onChange={handleChange} checked={checked} />
                </div>
            </div>
            {(showWarning) ?
                <div style={{ width: "900px", marginBottom: "1rem", marginLeft: "50px" }}>
                    <Alert severity="warning">
                        You have not agreed to participate in the study. Please read the information sheet
                        above and then check the box to continue.
                    </Alert>
                </div> : <div></div>}
            <div >
                <Button variant="contained"
                    style={{ backgroundColor: "#28243c", marginBottom: "1rem" }}
                    onClick={handleClick}>
                    Return to experiment
                </Button>
            </div>
        </div>
    )
}

export default Information;
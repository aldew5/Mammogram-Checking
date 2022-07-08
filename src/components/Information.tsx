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
        // if they checked the box we don't show the information
        // (bring them back to the menu)
        if (checked) {
            setShowInformation(false);
        } else {
            // show a warning because they didn't click
            // the box
            setShowWarning(true);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.terms}>
                <img src={File1} alt="not found" width="100%" />
                <img src={File2} alt="not found" width="100%" />
                <img src={File3} alt="not found" width="100%" />
            </div><br />
            <div style={{ display: "table", width: "100%", marginBottom: "2rem" }}>
                <div style={{ display: "table-row" }}>
                    <div style={{ textAlign: "left", display: "table-cell", width: "700px", paddingLeft: "100px" }}>
                        <p>
                            <b>I have read the Research Study Information Sheet and I agree to participate in this study</b>
                        </p>
                    </div>
                    <div style={{ display: "table-cell", marginTop: "4px", paddingRight: "100px" }}>
                        <Checkbox onChange={handleChange} checked={checked} />
                    </div>
                </div>
            </div>
            {(showWarning) ?
                <div style={{ width: "90%", marginBottom: "1rem", marginLeft: "40px" }}>
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
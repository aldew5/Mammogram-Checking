import File1 from '../assets/Consent_Fact_Sheet/001.png';
import File2 from '../assets/Consent_Fact_Sheet/002.png';
import File3 from '../assets/Consent_Fact_Sheet/003.png';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import styles from "../styles/Information.module.css";
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction, useState } from "react";

interface InformationProps {
    setChecked: Dispatch<SetStateAction<boolean>>;
    checked: boolean;
}

const Information = ({ checked, setChecked }: InformationProps) => {

    const [showWarning, setShowWarning] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }
    const handleClick = () => {
        if (checked) {
            navigate("/");
        } else {
            setShowWarning(true);
        }
    }

    return (
        <div style={{ alignContent: "center", marginLeft: "220px", marginTop: "50px", textAlign: "center" }}>
            <div className={styles.terms}>
                <img src={File1} alt="not found" width="1000" />
                <img src={File2} alt="not found" width="1000" />
                <img src={File3} alt="not found" width="1000" />
            </div><br />
            <div style={{ width: "100%", overflow: "hidden", marginBottom: "2rem" }}>
                <div style={{ textAlign: "left", marginLeft: "70px", float: "left", width: "700px" }}>
                    <p><b>I have read the Research Study Information Sheet and I agree to participate in this study</b></p>
                </div>
                <div style={{ marginRight: "400px", marginTop: "4px" }}>
                    <Checkbox onChange={handleChange} />
                </div>
            </div>
            {(showWarning) ?
                <div style={{ width: "900px", marginBottom: "1rem" }}>
                    <Alert severity="warning">
                        You have not agreed to participate in the study. Please read the information sheet
                        above and then check the box to continue.
                    </Alert>
                </div> : <div></div>}
            <div style={{ marginLeft: "-290px" }}>
                <Button variant='contained'
                    onClick={handleClick}>
                    Return to experiment
                </Button>
            </div>
        </div>
    )
}

export default Information;
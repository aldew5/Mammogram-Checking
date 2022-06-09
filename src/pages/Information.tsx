import File1 from '../assets/Consent_Fact_Sheet/001.png';
import File2 from '../assets/Consent_Fact_Sheet/002.png';
import File3 from '../assets/Consent_Fact_Sheet/003.png';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import styles from "../styles/Information.module.css";
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from "react";

interface InformationProps {
    setChecked: Dispatch<SetStateAction<boolean>>;
}

const Information = ({ setChecked }: InformationProps) => {

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
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
                    <Checkbox onChange={handleChange}/>
                </div>
            </div>
            <div style={{ marginLeft: "-290px" }}>
                <Button variant='contained'
                    onClick={() => { navigate("/") }}>
                    Return to experiment
                </Button>
            </div>
        </div>
    )
}

export default Information;
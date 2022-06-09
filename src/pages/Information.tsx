import File1 from '../assets/Consent_Fact_Sheet/001.png';
import File2 from '../assets/Consent_Fact_Sheet/002.png';
import File3 from '../assets/Consent_Fact_Sheet/003.png';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

const Information = () => {
    return (
        <div>
            <div style={{borderStyle: "solid", width: "1000px"}}>
                <img src={File1} alt="not found" width="1000" />
                <img src={File2} alt="not found" width="1000" />
                <img src={File3} alt="not found" width="1000" />
            </div><br />
            <div style={{ width: "100%", overflow: "hidden", marginBottom: "2rem" }}>
                <div style={{ textAlign: "left", marginLeft: "250px", float: "left", width: "700px" }}>
                    <p><b>I have read the Research Study Information Sheet and I agree to participate in this study</b></p>
                </div>
                <div style={{ marginRight: "400px", marginTop: "4px" }}>
                    <Checkbox />
                </div>
            </div>
        </div>
    )
}

export default Information;
import Button from "@mui/material/Button";
import Cat from "../assets/cat.jpeg";
import { useNavigate } from "react-router-dom";

const Instructions = () => {

    const navigate = useNavigate();

    return (
        <div>
            <p style={{paddingTop: "5rem", fontSize: "30px"}}>Instructions:</p>
            <p style={{textAlign:"left",
            paddingLeft: "3rem", paddingRight: "3rem", fontSize: "24px"}}>
                Upon starting the experiment, you will be presented with a series of
                MLO mammograms some of which show an abnormality. After 5 seconds of viewing time,
                you will be asked to rank how certain you are the the mammogram is normal on a scale
                from 1 to 10. You will then be shown the computer's rating of the same image.  
                With this information you will be asked to rate your willingness in letting the 
                computer make a decision about the case without the aid of a radiologist. 
                A sample trial image is shown below:
            </p>
            <div style={{margin:"auto"}}>
                <img src={Cat} alt="not found" width="350px"/>
            </div>
            <div style={{marginTop: "1rem"}}>
                <Button variant="contained" onClick={() => { navigate("/experiment") }}>
                    Begin experiment
                </Button>
            </div>
        </div>
    )
}

export default Instructions
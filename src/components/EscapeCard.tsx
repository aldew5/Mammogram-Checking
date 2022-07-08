import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface EscapeCardProps {
    setClicked: Dispatch<SetStateAction<boolean>>;
}

const EscapeCard = ({ setClicked }: EscapeCardProps) => {

    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: "450px", margin: "auto" }}>
            <Card sx={{ maxWidth: 450, minHeight: 250, border: 1, borderRadius: "8px" }}>
                <CardContent>
                    <Typography style={{
                        marginBottom: "3rem",
                        marginTop: "2rem"
                    }}><b>Are you sure you would like to terminate the experiment?</b></Typography>
                    <div style={{ paddingTop: "20px" }}>
                        <div style={{ float: "left", paddingLeft: "100px" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    margin: "auto",
                                    marginBottom: "1rem",
                                    display: "block",
                                }}
                                onClick={() => { navigate("/completion"); }}>
                                Yes
                            </Button>
                        </div>
                        <div style={{ marginRight: "50px" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { setClicked(false); }}>
                                No
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card >
        </div>
    )
}

export default EscapeCard;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Menu = () => {

    const [age, setAge] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [specialty, setSpecialty] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [mammo, setMammo] = useState<string>("");
    const [screening, setScreening] = useState<string>("");
    const [years, setYears] = useState<string>("");
    const [setting, setSetting] = useState<string>("");
    const [program, setProgram] = useState<string>("");
    const [models, setModels] = useState<string>("");

    const navigate = useNavigate();

    return (
        <Card sx={{ textAlign: "left", borderStyle: "solid", maxWidth:"700px" }}>
            <CardContent>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="h6"><b>Please fill out the following form:</b></Typography>
                </div>
                <div style={{ margin: "50px" }}>
                    <form>
                        <label htmlFor="age"><Typography>Age:</Typography></label>
                        <input type="text" id="age"
                            value={age} onChange={(e) => { setAge(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="gender">Gender: </label><br />
                        <input type="text" id="gender"
                            value={gender} onChange={(e) => { setGender(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="location">Where do you work? </label><br />
                        <input type="text" id="location"
                            value={location} onChange={(e) => { setLocation(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="specialty">Sub-specialty, if any? </label><br />
                        <input type="text" id="specialty"
                            value={specialty} onChange={(e) => { setSpecialty(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="mammo_number">How many mammogram cases do you read each year? </label><br />
                        <input type="text" id="mammo_number"
                            value={mammo} onChange={(e) => { setMammo(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="screening_number">Number of screening cases per year? </label><br />
                        <input type="text" id="screening_number"
                            value={screening} onChange={(e) => { setScreening(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="years">How many years have you been a radiologist? </label><br />
                        <input type="text" id="years"
                            value={years} onChange={(e) => { setYears(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="setting">In what setting do you read (academic, community, etc.)? </label><br />
                        <input type="text" id="setting"
                            value={setting} onChange={(e) => { setSetting(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="program">Do you work in a regional or national screening program? </label><br />
                        <input type="text" id="program"
                            value={program} onChange={(e) => { setProgram(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="models">Do you work with any AI mammography product currently? Which one(s)? </label><br />
                        <input type="text" id="models"
                            value={models} onChange={(e) => { setModels(e.target.value) }}
                            style={{ marginBottom: "2rem" }}
                        /><br />
                        <div style={{ textAlign: "center" }}>
                            <Button variant="contained" onClick={() => { navigate("/experiment") }}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}

export default Menu;
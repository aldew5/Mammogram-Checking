import { useState, Dispatch, SetStateAction } from "react";
import { User } from "../interfaces/user";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "../styles/Menu.module.css";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";


interface MenuProps {
    setUser: Dispatch<SetStateAction<User>>;
    setShowInformation: Dispatch<SetStateAction<boolean>>;
    checked: boolean;
}

const Menu = ({ setUser, checked, setShowInformation }: MenuProps) => {

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
    const [email, setEmail] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleClick = () => {
        const user: User = {
            age,
            gender,
            specialty,
            location,
            mammo_number: mammo,
            screening_number: screening,
            years,
            setting,
            program,
            models,
            email
        }
        setUser(user);
        if (checked) {
            navigate("/instructions");
        } else {
            setShowError(true);
        }
    }

    return (
        <Card className={styles.form_style_2}>
            <CardContent>
                <div className={styles.form_style_2_heading}>
                    User Information
                </div>
                <div style={{ textAlign: 'left' }}>
                    <form>
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age"
                            value={age} onChange={(e) => { setAge(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="gender">Gender: </label>
                        <input type="text" id="gender"
                            value={gender} onChange={(e) => { setGender(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="location">Which country do you work in? </label>
                        <input type="text" id="location"
                            value={location} onChange={(e) => { setLocation(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="specialty">Sub-specialty, if any? </label>
                        <input type="text" id="specialty"
                            value={specialty} onChange={(e) => { setSpecialty(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="mammo_number">Approximately how many mammogram cases do you read each year? </label>
                        <input type="text" id="mammo_number"
                            value={mammo} onChange={(e) => { setMammo(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="screening_number">Approximately how many screening cases do you do per year? </label>
                        <input type="text" id="screening_number"
                            value={screening} onChange={(e) => { setScreening(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="years">How many years have you been a radiologist? </label>
                        <input type="text" id="years"
                            value={years} onChange={(e) => { setYears(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="setting">In what setting do you read (academic, community, etc.)? </label>
                        <input type="text" id="setting"
                            value={setting} onChange={(e) => { setSetting(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="program">Do you work in a regional or national screening program? </label>
                        <input type="text" id="program"
                            value={program} onChange={(e) => { setProgram(e.target.value) }}
                            style={{ marginBottom: "1.5rem" }}
                        /><br />

                        <label htmlFor="models">Do you work with any AI mammography product currently? Which one(s)? </label>
                        <input type="text" id="models"
                            value={models} onChange={(e) => { setModels(e.target.value) }}
                            style={{ marginBottom: "2rem" }}
                        /><br />

                        <label htmlFor="models">
                            If you would like us to let you know what we learn from this study,
                            please give us your email:
                        </label>
                        <input type="text" id="email"
                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                            style={{ marginBottom: "2rem" }}
                        /><br />
                        <hr />
                        <p>
                            Click <u
                                className={styles.link}
                                onClick={() => { setShowInformation(true); }}>
                                here
                            </u> to read the information sheet
                        </p>
                        <div style={{ marginBottom: "1rem" }}>
                            {(showError) ?
                                <Alert severity="error">
                                    You must read the information sheet and agree to participate in the study before continuing.
                                    Access the information sheet using the link above.
                                </Alert> : <></>
                            }
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Button variant="contained"
                                style={{ backgroundColor: "#28243c" }}
                                onClick={handleClick}
                                sx={{ width: "200px" }}>
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
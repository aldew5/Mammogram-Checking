import { useState } from "react";

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

    return (
        <div style={{ textAlign: "left", borderStyle: "solid", margin: "50px" }}>
            <div style={{ textAlign: "center" }}>
                <h3>Please fill out the following form:</h3>
            </div>
            <div style={{ margin: "50px" }}>
                <form>
                    <label htmlFor="age">Age: </label><br />
                    <input type="text" id="age"
                        value={age} onChange={(e) => { setAge(e.target.value) }} /><br />

                    <label htmlFor="gender">Gender: </label><br />
                    <input type="text" id="gender"
                        value={gender} onChange={(e) => { setGender(e.target.value) }} /><br />

                    <label htmlFor="location">Where do you work? </label><br />
                    <input type="text" id="location"
                        value={location} onChange={(e) => { setLocation(e.target.value) }} /><br />

                    <label htmlFor="specialty">Sub-specialty, if any? </label><br />
                    <input type="text" id="specialty"
                        value={specialty} onChange={(e) => { setSpecialty(e.target.value) }} /><br />

                    <label htmlFor="mammo_number">How many mammo cases do you read each year? </label><br />
                    <input type="text" id="mammo_number"
                        value={mammo} onChange={(e) => { setMammo(e.target.value) }} /><br />

                    <label htmlFor="screening_number">Age: </label><br />
                    <input type="text" id="screening_number"
                        value={screening} onChange={(e) => { setScreening(e.target.value) }} /><br />

                    <label htmlFor="years">How many years have you been a radiologist? </label><br />
                    <input type="text" id="years"
                        value={years} onChange={(e) => { setYears(e.target.value) }} /><br />

                    <label htmlFor="setting">In what setting do you read (academic, community, etc.)? </label><br />
                    <input type="text" id="setting"
                        value={setting} onChange={(e) => { setSetting(e.target.value) }} /><br />

                    <label htmlFor="program">Do you work in a regional or national screening program? </label><br />
                    <input type="text" id="program"
                        value={program} onChange={(e) => { setProgram(e.target.value) }} /><br />

                    <label htmlFor="models">Age: </label><br />
                    <input type="text" id="models"
                        value={models} onChange={(e) => { setModels(e.target.value) }} />
                </form>
            </div>
        </div>
    )
}

export default Menu;
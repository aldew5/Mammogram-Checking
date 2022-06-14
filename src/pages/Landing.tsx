import Menu from "../components/Menu";
import Information from "../components/Information";
import { Dispatch, SetStateAction, useState } from "react";
import { User } from "../interfaces/user";
import styles from "../styles/Landing.module.css";

interface LandingProps {
    setUser: Dispatch<SetStateAction<User>>;
    id: string;
}

const Landing = ({ id, setUser }: LandingProps) => {

    const [showInformation, setShowInformation] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
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

    return (
        <div style={{backgroundColor: "#535974", height: "800px", borderStyle:"solid", borderWidth:"0.1px"}}>
            {(showInformation) ?
                <Information
                    setShowInformation={setShowInformation}
                    setChecked={setChecked}
                    checked={checked}
                /> :
                <div className={styles.main}>
                    <Menu
                        id={id}
                        setUser={setUser}
                        checked={checked}
                        setShowInformation={setShowInformation}
                        age={age}
                        setAge={setAge}
                        gender={gender}
                        setGender={setGender}
                        specialty={specialty}
                        setSpecialty={setSpecialty}
                        location={location}
                        setLocation={setLocation}
                        mammo={mammo}
                        setMammo={setMammo}
                        screening={screening}
                        setScreening={setScreening}
                        years={years}
                        setYears={setYears}
                        setting={setting}
                        setSetting={setSetting}
                        program={program}
                        setProgram={setProgram}
                        models={models}
                        setModels={setModels}
                        email={email}
                        setEmail={setEmail}
                    />
                </div>
            }
        </div>
    )
}

export default Landing;
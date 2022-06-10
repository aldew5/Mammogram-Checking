import Menu from "../components/Menu";
import Information from "../components/Information";
import { Dispatch, SetStateAction, useState } from "react";
import { User } from "../interfaces/user";
import styles from "../styles/Landing.module.css";

interface LandingProps {
    setUser: Dispatch<SetStateAction<User>>;
}

const Landing = ({ setUser }: LandingProps) => {

    const [showInformation, setShowInformation] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);

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
                        setUser={setUser}
                        checked={checked}
                        setShowInformation={setShowInformation}
                    />
                </div>
            }
        </div>
    )
}

export default Landing;
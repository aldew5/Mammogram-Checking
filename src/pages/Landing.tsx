import Menu from "../components/Menu";
import { Dispatch, SetStateAction } from "react";
import { User } from "../interfaces/user";
import styles from "../styles/Landing.module.css";

interface LandingProps {
    setUser: Dispatch<SetStateAction<User>>;
    checked: boolean;
}

const Landing = ({ setUser, checked }: LandingProps) => {

    return (
        <div className={styles.main}>
            <Menu
                setUser={setUser}
                checked={checked}
            />
        </div>
    )
}

export default Landing;
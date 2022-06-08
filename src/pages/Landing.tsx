import Menu from "../components/Menu";
import { Dispatch, SetStateAction } from "react";
import { User } from "../interfaces/user";
import styles from "../styles/Landing.module.css";

interface LandingProps {
    setUser: Dispatch<SetStateAction<User>>;
}

const Landing = ({ setUser }: LandingProps) => {

    return (
        <div className={styles.main}>
            <Menu
                setUser={setUser}
            />
        </div>
    )
}

export default Landing;
import Menu from "../components/Menu";
import { Dispatch, SetStateAction } from "react";
import { User } from "../interfaces/user";

interface LandingProps {
    setUser: Dispatch<SetStateAction<User>>;
}


const Landing = ({ setUser }: LandingProps) => {

    return (
        <div style={{ padding: "50px", margin: "0 auto", marginLeft: "350px" }}>
            <Menu
                setUser={setUser}
            />
        </div>
    )
}

export default Landing;
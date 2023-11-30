import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SurveyorHome = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Welcome Surveyor {user.displayName}!!</h1>

            <img className="mx-auto" src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Clip-Art-Background.png" alt="" />
        </div>
    );
};

export default SurveyorHome;
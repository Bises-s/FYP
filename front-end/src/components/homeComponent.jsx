import "./homeComponent.css"
import HomeImage from '../assets/home-image.png'
import { useNavigate } from "react-router-dom";
import NavigateComponent from "./navigateComponent";

const HomeComponent = () => {

    const navigate = useNavigate();
    const changeToSignIn = () => {
        navigate("/signIn");
    }

    const changeToRegister = () => {
        navigate("/register");
    }

    return (
        <>
            <NavigateComponent/>

            <div className="home-body">
                <div className="home-left-part">
                    <div className="home-title">YOUR VOTE MATTERS DON'T LOSE IT</div>
                    <div className="home-buttons">
                        <button type="button" className="btn btn-primary" onClick={changeToSignIn}>Log in</button>
                        <button type="button" className="btn btn-secondary" onClick={changeToRegister}>Register</button>
                    </div>
                </div>
                <div className="home-image">
                    <img src={HomeImage} alt="Voter_box" width="100%"/>
                </div>
            </div>
        </>
    );
}

export default HomeComponent;
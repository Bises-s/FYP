import "./homeComponent.css"
import HomeImage from '../assets/home-image.png'
import { useNavigate } from "react-router-dom";

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
            <nav className="navbar">
                <div className="container-fluid nav-full">
                    <div className="navbar-header">
                        <a className="nav-title" href="#"><h2>Online Voting System</h2></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/"><h4>Home</h4></a></li>
                        <li><a href="#"><h4>About</h4></a></li>
                        <li><a href="#"><h4>Vote Party</h4></a></li>
                        <li><a href="#"><h4>Vote Candidate</h4></a></li>
                        <li><a href="#"><h4>Contact</h4></a></li>
                        <li><a href="#"><h4>Log Out</h4></a></li>
                    </ul>
                </div>
            </nav>

            <div className="home-body">
                <div className="home-left-part">
                    <div className="home-title">YOUR VOTE MATTERS DON'T LOSE IT</div>
                    <div className="home-buttons">
                        <button type="button" className="btn btn-primary" onClick={changeToSignIn}>Log in</button>
                        <button type="button" className="btn btn-primary" onClick={changeToRegister}>Register</button>
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
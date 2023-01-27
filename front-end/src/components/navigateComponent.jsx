import "./navigateComponent.css"

const NavigateComponent = () => {

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid nav-full">
                    <div className="navbar-header">
                        <a className="nav-title" href="/"><h2>Online Voting System</h2></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/"><h4>Home</h4></a></li>
                        <li><a href="about-us"><h4>About</h4></a></li>
                        <li><a href="#"><h4>Vote Party</h4></a></li>
                        <li><a href="#"><h4>Vote Candidate</h4></a></li>
                        <li><a href="contact-us"><h4>Contact</h4></a></li>
                        <li><a href="#"><h4>Log Out</h4></a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavigateComponent;
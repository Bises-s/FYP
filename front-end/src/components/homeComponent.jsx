import "./homeComponent.css"

const HomeComponent = () => {
    return (
        <>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand home-title" href="#">Online Voting System</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Vote Party</a></li>
                        <li><a href="#">Vote Candidate</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Log Out</a></li>
                        <li><a href="signIn">signIn</a></li>
                        <li><a href="register">Register</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default HomeComponent;
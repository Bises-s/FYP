import "./registerComponent.css"

const RegisterComponent = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center head">
                <div className="main-container">
                    <h3 className="text-center text-success">Register</h3>
                    <div className="input-form rounded">
                        <div>
                            <div>First Name</div>
                            <input type="text" placeholder="Please enter your first name" className="input-box rounded" />
                        </div>
                        <div>
                            <div>Last Name</div>
                            <input type="text" placeholder="Please enter your last name" className="input-box rounded" />
                        </div>
                        <div>
                            <div>Email</div>
                            <input type="text" placeholder="Please enter your email address" className="input-box rounded" />
                        </div>
                        <div>
                            <div>Password</div>
                            <input type="password" placeholder="Please enter your password" className="input-box rounded" />
                        </div>
                        <div>
                            <div>Confirm Password</div>
                            <input type="password" placeholder="Please enter your password" className="input-box rounded" />
                        </div>
                        <div>
                            <div>Province
                                <span>
                                    <select name="province" id="province" style={{ margin: "5px 15px" }}>
                                        <option value="one">Province No. 1</option>
                                        <option value="two">Province No. 2</option>
                                        <option value="three">Province No. 3</option>
                                        <option value="four">Province No. 4</option>
                                        <option value="five">Province No. 5</option>
                                        <option value="six">Province No. 6</option>
                                        <option value="seven">Province No. 7</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>Phone Number</div>
                            <input type="text" placeholder="Please enter your phone number" className="input-box rounded" />
                        </div>
                        <div>
                            <div>Citizenship Number</div>
                            <input type="text" placeholder="Please enter your citizenship number" className="input-box rounded" />
                        </div>
                        <div>
                            <div>Gender
                                <span>
                                    <select name="gender" id="gender" style={{ margin: "5px 15px" }}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>Profile Image</div>
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile01" />
                            </div>
                        </div>
                        <button className="input-box btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterComponent;
import React,{useState} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import "./registerComponent.css"
import axios from 'axios'

const initialState = {
    fname:"",
    lname: "",
    email: "",
    password:"",
    cpassword:"",
    province:"",
    contact:"",
    citizennum:"",
    gender:""
}

const RegisterComponent = () => {
    const [state,setState] = useState(initialState);

    const {fname,lname,email,password,cpassword,province,contact,citizennum,gender} = state;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!fname || !lname || !email || !password || !cpassword || !province ||!contact ||!citizennum ||!gender ){
            console.log("Please provide value into each field");
        }else{
            axios.post("http://localhost:5000/api/register",{
                fname,
                lname,
                email,
                password,
                cpassword,
                province,
                contact,
                citizennum,
                gender
                

            }).then(() => {
                // setState({fname: "",lname: "", email: "",password:"",cpassword:"", province:"", contact:"",citizennum:"",gender:""})
            }).catch((err) => (err.response.data));
            setTimeout(()=> navigate("/"),500)
        }
    } 
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state,[name]:value});
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center head">
                <div className="main-container">
                {/* <form  onSubmit = {handleSubmit}>  */}
                    <h3 className="text-center text-success">Register</h3>
                    
                    <div className="input-form rounded">
                        <div>
                            <div>First Name</div>
                            <input type="text" 
                            placeholder="Please enter your first name" 
                            className="input-box rounded" 
                            value={fname}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>Last Name</div>
                            <input type="text" 
                            placeholder="Please enter your last name" 
                            className="input-box rounded" 
                            value={lname}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>Email</div>
                            <input type="email" 
                            placeholder="Please enter your email address" 
                            className="input-box rounded" 
                            value={email}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>Password</div>
                            <input type="password" 
                            placeholder="Please enter your password" 
                            className="input-box rounded" 
                            value={password}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>Confirm Password</div>
                            <input type="password" 
                            placeholder="Please enter your password" 
                            className="input-box rounded" 
                            value={cpassword}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>Province
                                <span>
                                    <select 
                                    type ="text"
                                    name="province" 
                                    id="province" 
                                    value={province}
                                    onChange={handleInputChange}
                                    
                                    style={{ margin: "5px 15px" }}
                                    >
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
                            <input type="number" 
                            placeholder="Please enter your phone number" 
                            className="input-box rounded" 
                            value={contact}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>Citizenship Number</div>
                            <input type="number"
                            placeholder="Please enter your citizenship number" 
                            className="input-box rounded" 
                            value={citizennum}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>Gender
                                <span>
                                    <select 
                                    type="text"
                                    name="gender" 
                                    id="gender"
                                    value={gender}
                                    onChange={handleInputChange}
                                     style={{ margin: "5px 15px" }}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div>
                            {/* <div>Profile Image</div>
                            <div class="input-group mb-3">
                                <input type="file" class="form-control" id="inputGroupFile01" />
                            </div> */}
                        </div>
                        <button type='submit' className="input-box btn btn-success"><input type="submit" onClick={handleSubmit} className='register-btn' value="Register" /></button>
                    </div>
                    {/* </form>  */}
                </div>
            </div>
        </>
    );
}

export default RegisterComponent;
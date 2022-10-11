import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

    return (
        <>
    
        <div className="shape_up"></div>
    
        <div className="Outer">
            <div className="Inner">
                <h1 className="cl">Login</h1>
            </div>
    
            <div className="contactDiv">
                <div className="Row">
                    <div className="loginStyle">
                        <form  className="formContainer">
                            <div className="input_div1">
    
                                <label for="exampleInputusername" class="formLabel">
                                    user_name
                                </label>
    
                                <input
                                    type="text"
                                    className="input"
                                    id="exampleInputusername"
                                    name="username"
                                    required
                                    // value={user.email}
                                    // onChange={handleChange}
                                    placeholder="username"
                                />
    
                            </div>
    
                            <div className="input_div2">
    
                                <label for="exampleInputPassword1" class="formLabel">Password</label>
    
                                <input
                                    type="password"
                                    className="input"
                                    id="exampleInputPassword1"
                                    name="password"
                                    required
                                    // value={user.password}
                                    // onChange={handleChange}
                                    placeholder="Password"
                                />
    
                            </div>
                        <div className="login_out">
                            <button type="submit" className="loginB">
                                Login
                            </button>
                        </div>
    
                        </form>
    
                       
                    </div>
    
                </div>
            </div>
        </div>
    
        <div className="shape_down"></div>
        </>
    )
}

export default Login;
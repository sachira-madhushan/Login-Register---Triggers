import 'react'

function Register(){
    return(
        <>
            <div className="wrapper1">
                <form action=''>
                    <h1>Register</h1>
                    <div className = "input-box1">
                        <input type='text' placeholder='Username' required/>
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className = "input-box1">
                        <input type='text' placeholder='Email' required/>
                        <i className='bx bxs-envelope' ></i>
                    </div>
                    <div className="input-box1">
                    <input type='password' placeholder='Password' required/>
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="terms">
                        <label><input type='chechbox'>I agree to </input></label>
                        <a href="#" className="option">Terms & Conditions</a>
                    </div>
                    <button type='submit' className="btn">Register</button>
                    
                    <div className="login-link"></div>
                    <p>Already have an account?  <a href='#'>Login</a></p>
                </form>
            </div>
        </>
    );
}

export default Register
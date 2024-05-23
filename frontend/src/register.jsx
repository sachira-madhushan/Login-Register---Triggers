import 'react'

function Register(){
    return(
        <>
            <div class="wrapper1">
                <form action=''>
                    <h1>Register</h1>
                    <div class = "input-box1">
                        <input type='text' placeholder='Username' required/>
                        <i class="bx bxs-user"></i>
                    </div>
                    <div class = "input-box1">
                        <input type='text' placeholder='Email' required/>
                        <i class='bx bxs-envelope' ></i>
                    </div>
                    <div class="input-box1">
                    <input type='password' placeholder='Password' required/>
                        <i class="bx bxs-lock-alt"></i>
                    </div>
                    <div class="terms">
                        <label><input type='chechbox'>I agree to </input></label>
                        <a href="#" class="option">Terms & Conditions</a>
                    </div>
                    <button type='submit' class="btn">Register</button>
                    
                    <div class="login-link"></div>
                    <p>Already have an account?  <a href='#'>Login</a></p>
                </form>
            </div>
        </>
    );
}

export default Register
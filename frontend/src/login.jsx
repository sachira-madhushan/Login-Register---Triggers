import 'react'

function Login(){
    return(
        <>
            <div class="wrapper">
                <form action=''>
                    <h1>Login</h1>
                    <div class = "input-box">
                        <input type='text' placeholder='Username' required/>
                        <i class="bx bxs-user"></i>
                    </div>
                    <div class="input-box">
                    <input type='password' placeholder='Password' required/>
                        <i class="bx bxs-lock-alt"></i>
                    </div>

                    <button type='submit' class="btn">Login</button>
                    
                    <div class="register-link"></div>
                    <p>Don't have account?  <a href='#'>Register</a></p>
                </form>
            </div>
        </>
    );
}

export default Login
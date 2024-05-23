import 'react'

function Login(){
    return(
        <>
            <div className="wrapper">
                <form action=''>
                    <h1>Login</h1>
                    <div className = "input-box">
                        <input type='text' placeholder='Email' required/>
                        <i className='bx bxs-envelope' ></i>
                    </div>
                    <div className="input-box">
                    <input type='password' placeholder='Password' required/>
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="remember">
                        <label><input type='chechbox'>Remember me</input></label>
                    </div>
                    <button type='submit' className="btn">Login</button>
                    
                    <div className="register-link"></div>
                    <p>Don't have account?  <a href='#'>Register</a></p>
                </form>
            </div>
        </>
    );
}

export default Login
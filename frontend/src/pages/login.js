import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css'
import '../css/form.css'


function Home() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>

                    <div>
                        {/* <button className='btn1' onClick={()=> navigate('/login')}><h2>Login Here</h2></button> */}
                        <button className='btn1' onClick={()=> navigate('/register')}>Register Here</button>
                    </div>
                </div>
            </header>
            <div className='form'>
                <div className='title'>
                    <h2>Login</h2>
                </div>
                <form>                    
                    <input placeholder='username or email'></input>                    
                    <input placeholder='username or password'></input>                    
                    <div>
                        <input type='checkbox' ></input>
                        <label>Remember me</label>
                    </div>                    
                    <button>login</button>
                </form>                
            </div>
        </>
    );
}

export default Home;

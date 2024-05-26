import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css'
import '../css/login.css'


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
                        <button className='btn1' onClick={()=> navigate('/register')}><h2>Register Here</h2></button>
                    </div>
                </div>
            </header>
            <div className='form'>
                <form>

                </form>                
            </div>
        </>
    );
}

export default Home;

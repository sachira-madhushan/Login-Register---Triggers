import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png';
import '../css/all.css'
import '../css/verify.css'


function Verify() {
    const navigate = useNavigate();

    useEffect(() => {
        
        const email = getCookie('email');

        axios.get(`http://localhost:8081/api/user/verify/${email}`)
            .then(res => {
                if (res.data.verified) {
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err);
                
            });
    }, []); 


    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo" onClick={()=> navigate('/')}>
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>

                    <div className='top-button'>
                        {/* <p>I don't have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/register')}>Register</button> */}
                        <p>I already have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/login')}>Login</button>
                    </div>
                </div>
            </header>
            <div className='verify'>
                <div className='box'>
                    <div className='title'>
                        <h2>Please Verify Your Email.</h2>
                    </div>
                    <div className='sub-heading'>
                        <h2>Verification Email Has Sent...</h2>    
                    </div>
                    
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            color: "rgb(96, 96, 96)"
                        }}
                    >
                        <p>Email not recieved?</p> 
                        <button 
                            type="button"
                            onClick={() => {
                                // Handle the terms and conditions click
                                alert("Resent the email");
                            }}
                            style={{
                                background: "none",
                                color: "blue",
                                border: "none",
                                padding: "0 0 0 5px",
                                cursor: "pointer",
                                textDecoration: "underline",
                                fontSize: "inherit",
                                
                                
                            }}
                        >
                            Resend Email
                        </button>                    
                    </div>           
                </div>
            </div>
        </>
    );
}

export default Verify;

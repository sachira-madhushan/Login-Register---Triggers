import React from 'react';
import logo from '../asset/logo.png';
import '../css/all.css'
import '../css/contrib.css'

import sachiraImg from '../asset/sachira.jpg';
import pasinduImg from '../asset/pasindu.jpg';
import sheharaImg from '../asset/shehara.jpg';
import viduraImg from '../asset/vidura.jpg';
import iroshanImg from '../asset/iroshan.jpg';
import darshanaImg from '../asset/darshana.jpg';
import naveenImg from '../asset/naveen.jpg';

import { useNavigate } from 'react-router-dom';

function Contrib() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className='nav_bar'>
                    <div className="logo" onClick={()=> navigate('/')}>
                        <img src={logo} alt="logo" />
                        <h2><span>Sample page</span></h2>
                    </div>

                    <div className='top-button'>
                        <p>I don't have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/register')}>Register</button>
                        {/* <p>I already have an accout</p>
                        <button className='btn1' onClick={()=> navigate('/login')}>Login</button> */}
                    </div>
                </div>
            </header>
            <section className="space">
                <div className="wrapper">
                    <div className="member-card" onClick={() => navigate('/')}>
                        <img src={sachiraImg} alt=''></img>
                        <h2>Sachira Madushan</h2>
                        <p>Team Leader</p>
                    </div>
                    <div className="member-card" onClick={() => navigate('/')}>
                        <img src={pasinduImg} alt=''></img>
                        <h2>Pasindu Perera</h2>
                        <p>Team Member</p>
                    </div>
                    <div className="member-card" onClick={() => navigate('/')}>
                        <img src={sheharaImg} alt=''></img>
                        <h2>Shehara Kulasinghe</h2>
                        <p>Team Member</p>
                    </div>
                    <div className="member-card" onClick={() => navigate('/')}>
                        <img src={viduraImg} alt=''></img>
                        <h2>Vidura Kavinda</h2>
                        <p>Team Member</p>
                    </div>
                    <div className="member-card" onClick={() => navigate('/')}>
                        <img src={iroshanImg} alt=''></img>
                        <h2>Iroshan Udayakumara</h2>
                        <p>Team Member</p>
                    </div>
                    <div className="member-card" onClick={() => navigate('/')}>
                        <img src={darshanaImg} alt=''></img>
                        <h2>Darshana Dissanayaka</h2>
                        <p>Team Member</p>
                    </div>
                    <div className="member-card" onClick={() => navigate('/')}>
                        <img src={naveenImg} alt=''></img>
                        <h2>Naveen Wijesinghe</h2>
                        <p>Team Member</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contrib;
